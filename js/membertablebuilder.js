var PLAYERS_URL = 'https://players.planetside2.com/#!/';

function MemberTableBuilder(table, rules) {

	function getSlug(str) {
		return str.replace(/\s/, '-');
	}

	function getCell(equipObj) {
		var cell = $('<td>');

		cell.text(equipObj.equipped ? equipObj.name + ' Equipped' : 'Not Equipped');
		cell.addClass(equipObj.equipped ? 'ok' : 'notok');

		if (equipObj.equipped) {
			$.each(equipObj.equipment, function(group, items) {
				var span = $('<span>');
				span.text('[ ' + items.join(' | ') + ' ]');
				cell.append(span);
			});
		} else {
			$.each(equipObj.missing, function(idx, obj) {
				var span = $('<span>');
				span.text('[ ' + obj.group + ' ]');
				cell.append(span);
			});
		}

		return cell;
	}

	function forEachRule(callback) {
		$.each(rules, function(squad, types) {
			var squadSlug = getSlug(squad);
			$.each(types, function(type, fn) {
				callback.call(this, squadSlug, type, fn);
			});
		});
	}

	function toggleClass(element, className) {
		if (element.is(':checked')) {
			table.addClass(className);
			element.parent().addClass('selected');
		} else {
			table.removeClass(className);
			element.parent().removeClass('selected');
		}
	}

	this.buildHeader = function() {
		var headerRow = $('<tr>');

		headerRow.append($('<th>').text('Name'));
		headerRow.append($('<th>').text('BR'));

		forEachRule(function(squadSlug, type) {
			var cell = $('<th>');
			cell.addClass(squadSlug);
			cell.text(type);
			headerRow.append(cell);
		});

		table.append(headerRow);

		table.removeClass();
		table.addClass(getSlug(Object.keys(rules)[0]) + '-only');
	};

	this.buildNav = function(nav) {
		var hideOfflineCheck = nav.find('#hide-offline'),
			hideMissingCheck = nav.find('#hide-missing');

		$.each(rules, function(squad) {
			var squadSlug = getSlug(squad),
				navButton = $('<li>');

			navButton.addClass('primary');
			navButton.text(squad);

			navButton.on('click', function() {
				var $this = $(this),
					nooffline = table.hasClass('nooffline'),
					nomissing = table.hasClass('nomissing');

				if ($this.hasClass('selected')) {
					return;
				}

				nav.find('li.primary').removeClass('selected');
				$this.addClass('selected');

				table.removeClass();
				table.addClass(squadSlug + '-only');
				if (nooffline) {
					table.addClass('nooffline');
				}
				if (nomissing) {
					table.addClass('nomissing');
				}
			});

			nav.append(navButton);
		});

		function handleOfflineCheckbox() {
			toggleClass(hideOfflineCheck, 'nooffline');
		}
		hideOfflineCheck.on('click', handleOfflineCheckbox);
		table.removeClass('nooffline');
		handleOfflineCheckbox();

		function handleMissingCheckbox() {
			toggleClass(hideMissingCheck, 'nomissing');
		}
		hideMissingCheck.on('click', handleMissingCheckbox);
		table.removeClass('nomissing');
		handleMissingCheckbox();

		nav.find('li.primary').first().addClass('selected');
	};

	this.addMember = function(character, equipment) {
		var row = $('<tr>'),
			nameColumn = $('<td>'),
			anchor = $('<a>');

		anchor.text(character.name.first);
		anchor.attr('href', PLAYERS_URL + character.character_id);
		anchor.attr('target', '_blank');

		nameColumn.append($('<span>').addClass('status'));
		nameColumn.append(anchor);

		row.addClass(character.online_status === '1' ? 'online' : 'offline');
		row.append(nameColumn);
		row.append($('<td>').text(character.experience.length ? character.experience[0].rank : 'N/A'));

		forEachRule(function(squadSlug, type, fn) {
			var cell = getCell(fn(equipment));
			cell.addClass(squadSlug);
			row.append(cell);
		});

		table.append(row);
	};

}
