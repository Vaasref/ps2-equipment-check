/* exported Qualifications */

function Qualifications(skills, items) {
	var requirements = {
			'membre': {
				meta: {
					passPercentage: 100
				},
				classes: {	
					'Squad Leader': {
						certifications: [
							{ skill: skills.squadLeader.priorityDeployment, level: 0 }
						],
						equipment: []
					}
				}
			},
			'veteran': {
				meta: {
					passPercentage: 100
				},
				classes: {	
					'Une arme short range<br />Une arme mid range<br /> Viseur HS/NV scope sur toutes les armes<br />Du C-4 et des mines': {
						certifications: [
							{ skill: skills.universal.medicalKit, level: 2 }
						],
						equipment: [
						items.weapon.hunter,
						items.weapon.hunterAttachments.detectBolt
						]
					}
				}
			},			
			'medic': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.medic.medicalApplicator, level: 6 },
							{ skill: skills.medic.nanoRegenDevice, level: 5 },
							{ skill: skills.medic.naniteReviveGrenade, level: 1 },
							{ skill: skills.medic.naniteHealingGrenade, level: 1 },							
							{ skill: skills.medic.grenadeBandolier, level: 2 },
							{ skill: skills.medic.nanoweaveArmor, level: 1 }						
						],
						equipment: []
					}
				}
			},
			'rhino': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Ingenieur': {
						certifications: [
							{ skill: skills.engineer.nanoArmorKit, level: 6 }						
						],
						equipment: []
					}
				}
			},
			'engineer': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.engineer.nanoArmorKit, level: 5 },
							{ skill: skills.engineer.proximityMine, level: 1 },
							{ skill: skills.engineer.tankMine, level: 2 }
						],
						equipment: [
							items.weapon.solsticesf,
							items.weapon.solsticesfAttachments.smoke
						]
					}
				}
			},
			'lightAssault': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.lightAssault.drifterJumpJets, level: 5 },
							{ skill: skills.lightAssault.jumpJets, level: 4 },
							{ skill: skills.lightAssault.c4, level: 2 }
						],
						equipment: [
						items.weapon.solsticesf,
						items.weapon.solsticesfAttachments.smoke
						]
					}
				}
			},
			'infiltrator': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.infiltrator.reconDetectDevice, level: 4 },
							{ skill: skills.infiltrator.proximityMine, level: 2 },
							{ skill: skills.infiltrator.empGrenade, level: 1 },
							{ skill: skills.infiltrator.motionSpotter, level: 3 }
						],
						equipment: []
					}
				}
			},
			'heavyAssault': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.heavyAssault.concussionGrenade, level: 1 },
						],
						equipment: [
							items.weapon.lancer,
							items.weapon.nemesis,
							items.weapon.lasher
						]
					}
				}
			},
			'maxUnit': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.max.flakArmor, level: 4 },
							{ skill: skills.max.charge, level: 2 }
						],
						equipment: [
							items.max.leftBurster,
							items.max.leftComet,
							items.max.rightBlueshift
						]
					}			
				}
			},
			'sunderer': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
						{ skill: skills.sunderer.gateShieldDiffuser, level: 1},
						{ skill: skills.sunderer.fireSuppression, level: 3 },
						{ skill: skills.sunderer.blockadeArmor, level: 3 },
						{ skill: skills.sunderer.mineGuard, level: 4 },
						{ skill: skills.sunderer.naniteProximityRepairSystem, level: 6 },
						{ skill: skills.sunderer.vehicleAmmoDispenser, level: 1 },
						{ skill: skills.sunderer.deploymentShield, level: 1 }
						],
						equipment: []
					}
				}
			},
			'magrider': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.magrider.magBurner, level: 3 },
							{ skill: skills.magrider.racerHighSpeedChassis, level: 3 }
						],
						equipment: [
						items.magrider.supernovaFpc,
						items.magrider.supernovaVpc,
						items.magrider.proton,
						items.magrider.saron,
						items.magrider.halberd,
						items.magrider.g30
						
						]
					}
				}
			},
			'lightning': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.lightning.reinforcedTopArmor, level: 1 }
						],
						equipment: [
							items.lightning.skyguard
						]
					}
				}
			},
			'flash': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.flash.radar, level: 4 }
						],
						equipment: []
					}
				}
			},
			'harasser': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Indispensable': {
						certifications: [
							{ skill: skills.harasser.fireSuppressionSystem, level: 4 },
							{ skill: skills.harasser.compositeArmor, level: 4 },
							{ skill: skills.harasser.turbo, level: 5 }
						],
						equipment: [
							items.harasser.halberd
						]
					}
				}
			},
			'commander': {
				meta: {
					passPercentage: 100
				},
				classes: {
					'Squad Leader': {
						certifications: [
							{ skill: skills.squadLeader.commandCommChannel, level: 1 },
							{ skill: skills.squadLeader.requestReinforcements, level: 1 },
							{ skill: skills.squadLeader.rallyPointGreen, level: 1 },
							{ skill: skills.squadLeader.rallyPointOrange, level: 1 },
							{ skill: skills.squadLeader.rallyPointPurple, level: 1 },
							{ skill: skills.squadLeader.rallyPointYellow, level: 1 },
							{ skill: skills.squadLeader.priorityDeployment, level: 4 }
						],
						equipment: []
					}
				}
			},				
			

			'scythe':{				
				meta:{					
					passPercentage: 100				
				},				
						classes:{
						'Indispensable':	{
									certifications: [
									{ skill: skills.scythe.fireSuppression, level: 1 },
									{ skill: skills.scythe.nanite, level: 4 },
									{ skill: skills.scythe.decoyFlares, level: 2 }
									],						
									equipment: [
									items.scythe.ppa,
									items.scythe.photona2a,
									items.scythe.dualphoton,
									items.scythe.dualphotonAttachments.thermal
									]					
						}	
					}			
			},						
				
			
			
			'liberator':{				
				meta:{					
					passPercentage: 100				
				},				
						classes:{
						'Indispensable':	{
									certifications: [
									{ skill: skills.liberator.lf100Afterburner, level: 1 },
									{ skill: skills.liberator.naniteAutoRepair, level: 5 },
									{ skill: skills.liberator.precisionBomberAirframe, level: 3 }
									],						
									equipment: [
									items.liberator.tankbuster,
									items.liberator.tankbusterAttachments.thermal,
									items.liberator.dalton,
									items.liberator.daltonAttachments.thermal,
									items.liberator.shredder,
									items.liberator.shredderAttachments.thermal,
									items.liberator.bulldog,
									items.liberator.bulldogAttachments.thermal,
									items.liberator.zepher,
									items.liberator.zepherAttachments.thermal
		
									]					
									}									
						}
			},	

			'galaxy':{				
				meta:{					
					passPercentage: 100				
				},				
						classes:{
						'Indispensable':	{
									certifications: [
									{ skill: skills.galaxy.fireSuppression, level: 1 },
									{ skill: skills.galaxy.nanite, level: 1 }
									],						
									equipment: [
									items.galaxy.bullLeft,
									items.galaxy.bullRight
									]					
									}	
						}			
			}	
	},
		serverSmash = qual('Server Smash', null, null, true),
		echoEagle = qual('Falcon Ops', null, requirements.echoEagle, true),
		echoRhino = qual('Buffalo Ops', null, requirements.echoRhino, true),		
		echoHavoc = qual('Tiger Ops', null, requirements.echoHavoc, true),
		max = qual('MAX', null, requirements.maxUnit),
		heavyAssault = qual('Heavy Assault', null, requirements.heavyAssault),
		echoCovertOps = qual('Snake Ops', null, requirements.echoCovertOps, true),
		infiltrator = qual('Infiltrator', null, requirements.infiltrator),
		lightAssault = qual('Light Assault', null, requirements.lightAssault),
		echoSpecialist = qual('Zebra Ops', null, requirements.echoSpecialist, true),
		engineer = qual('Engineer', null, requirements.engineer),
		combatMedic = qual('Combat Medic', null, requirements.medic),
		commander = qual('Commander', null, requirements.commander, true),
		sunderer = qual('Sunderer', null, requirements.sunderer),
		flash = qual('Flash', null, requirements.flash),
		harasser = qual('Harasser', null, requirements.harasser),
		lightning = qual('Lightning', null, requirements.lightning),
		magrider = qual('Magrider', null, requirements.magrider),
		galaxy = qual('Galaxy', null, requirements.galaxy),
		valkyrie = qual('Valkyrie', null, requirements.valkyrie),
		liberator = qual('Liberator', null, requirements.liberator),
		scythe = qual('Scythe', null, requirements.scythe),
		rhino = qual('Rhino Ops', [ sunderer, magrider, lightning, harasser, flash ], requirements.rhino),
		eagle = qual('Eagle Ops', [scythe,liberator,galaxy,valkyrie], requirements.eagle),
		veteran = qual('Wolf Ops', [ combatMedic, lightAssault, heavyAssault, commander, engineer, infiltrator, max ], requirements.veteran),
		membre = qual('Member', [veteran,eagle,rhino], requirements.membre, true);

	addParentRelationships(membre);

	return membre;

	function qual(name, child, certs, isRank) {
		var obj = {};
		obj.name = name;
		if (child) {
			if ($.isArray(child)) {
				obj.child = child;
			} else {
				obj.child = [ child ];
			}
		}
		if (certs) {
			obj.cert = certs;
		}
		if (isRank) {
			obj.isRank = true;
		}
		return obj;
	}

	function addParentRelationships(rank, parent) {
		if (parent) {
			if (rank.parent) {
				rank.parent.push(parent);
			} else {
				rank.parent = [ parent ];
			}
		}
		if (rank.child) {
			$.each(rank.child, function() {
				addParentRelationships(this, rank);
			});
		}
	}
}
	