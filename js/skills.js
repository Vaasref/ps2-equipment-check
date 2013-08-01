/* exported skills */

// skills definitions
var skills = {
	universal: {
		medicalKit: {
			name: 'Medical Kit',
			skillLine: 4217,
			skills: [
				4615,
				4616,
				4621,
				4622
			]
		},
		restorationKit: {
			name: 'Restoration Kit',
			skillLine: 4218,
			skills: [
				4617,
				4618,
				4623,
				4624
			]
		}
	},
	heavyAssault: {
		concussionGrenade: {
			name: 'Concussion Grenade',
			skillLine: 931,
			skills: [
				3680
			]
		},
		c4: {
			name: 'C-4 (explosives)',
			skillLine: 933,
			skills: [
				3686,
				3687
			]
		},
		flakArmor: {
			name: 'Flak Armor',
			skillLine: 934,
			skills: [
				3688,
				3689,
				3690,
				3691,
				3692
			]
		},
		nanoweaveArmor: {
			name: 'Nanoweave Armor',
			skillLine: 935,
			skills: [
				3693,
				3694,
				3695,
				3696,
				3697
			]
		},
		resistShield: {
			name: 'Resist Shield',
			skillLine: 940,
			skills: [
				3718,
				3719,
				3720,
				3721,
				3722
			]
		}
	},
	lightAssault: {
		flashGrenade: {
			name: 'Flash Grenade',
			skillLine: 972,
			skills: [
				3843
			]
		},
		nanoweaveArmor: {
			name: 'Nanoweave Armor',
			skillLine: 974,
			skills: [
				3848,
				3849,
				3850,
				3851,
				3852
			]
		},
		flakArmor: {
			name: 'Flak Armor',
			skillLine: 977,
			skills: [
				3863,
				3864,
				3865,
				3866,
				3867
			]
		},
		c4: {
			name: 'C-4 (explosives)',
			skillLine: 973,
			skills: [
				3846,
				3847
			]
		},
		jumpJets: {
			name: 'Jump Jets',
			skillLine: 978,
			skills: [
				'xx',
				3869,
				3870,
				3871,
				3872,
				5874
			]
		},
		drifterJumpJets: {
			name: 'Drifter Jump Jets',
			skillLine: 980,
			skills: [
				3878,
				3879,
				3880,
				3881,
				3882
			]
		},
		grenadeBandolier: {
			name: 'Grenade Bandolier',
			skillLine: 1130,
			skills: [
				4422,
				4423
			]
		},
		ammunitionBelt: {
			name: 'Ammunition Belt',
			skillLine: 5609,
			skills: [
				5947,
				5948,
				5949,
				5950
			]
		}
	},
	engineer: {
		stickyGrenade: {
			name: 'Sticky Grenade',
			skillLine: 956,
			skills: [
				3774
			]
		},
		flakArmor: {
			name: 'Flak Armor',
			skillLine: 961,
			skills: [
				3790,
				3791,
				3792,
				3793,
				3794
			]
		},
		nanoweaveArmor: {
			name: 'Nanoweave Armor',
			skillLine: 962,
			skills: [
				3795,
				3796,
				3797,
				3798,
				3799
			]
		},
		nanoArmorKit: {
			name: 'Nano-Armor Kit',
			skillLine: 969,
			skills: [
				'xx',
				3830,
				3831,
				3832,
				3833,
				3834
			]
		},
		tankMine: {
			name: 'Tank Mine',
			skillLine: 960,
			skills: [
				3786,
				3787
			]
		},
		avManaTurret: {
			name: 'Anti-Vehicle MANA Turret',
			skillLine: 965,
			skills: [
				3810,
				3811,
				3812,
				3813,
				3814
			]
		},
		ammunitionPackage: {
			name: 'Ammunition Package',
			skillLine: 2052,
			skills: [
				'xx',
				2998,
				2999,
				3000,
				3001,
				3002
			]
		}
	},
	medic: {
		naniteHealingGrenade: {
			name: 'Nanite Healing Grenade',
			skillLine: 916,
			skills: [
				3608
			]
		},
		naniteReviveGrenade: {
			name: 'Nanite Revive Grenade',
			skillLine: 917,
			skills: [
				3611
			]
		},
		c4: {
			name: 'C-4 (explosives)',
			skillLine: 918,
			skills: [
				3614,
				3615
			]
		},
		nanoweaveArmor: {
			name: 'Nanoweave Armor',
			skillLine: 919,
			skills: [
				3616,
				3617,
				3618,
				3619,
				3620
			]
		},
		nanoRegenDevice: {
			name: 'Nano-Regen Device',
			skillLine: 924,
			skills: [
				'xx',
				3635,
				3636,
				3637,
				3638,
				3639
			]
		},
		medicalApplicator: {
			name: 'Medical Applicator',
			skillLine: 929,
			skills: [
				'xx',
				3660,
				3661,
				3662,
				3663,
				3664
			]
		},
		flakArmor: {
			name: 'Flak Armor',
			skillLine: 5584,
			skills: [
				5795,
				5796,
				5797,
				5798,
				5799
			]
		}
	},
	infiltrator: {
		advancedEquipmentTerminalHacking: {
			name: 'Advanced Equipment Terminal Hacking',
			skillLine: 46,
			skills: [
				156,
				157,
				158,
				159,
				160
			]
		},
		empGrenade: {
			name: 'EMP Grenade',
			skillLine: 47,
			skills: [
				161
			]
		},
		claymoreMine: {
			name: 'Claymore Mine',
			skillLine: 49,
			skills: [
				167,
				168
			]
		},
		nanoweaveArmor: {
			name: 'Nanoweave Armor',
			skillLine: 51,
			skills: [
				174,
				175,
				176,
				177,
				178
			]
		},
		reconDetectDevice: {
			name: 'Recon Detect Device',
			skillLine: 64,
			skills: [
				16445,
				229,
				230,
				231,
				232,
				233
			]
		},
		flakArmor: {
			name: 'Flak Armor',
			skillLine: 5581,
			skills: [
				5790,
				5791,
				5792,
				5793,
				5794
			]
		}
	},
	max: {
		lockdown: {
			name: 'Lockdown',
			skillLine: 991,
			skills: [
				3933,
				3934,
				3935,
				3936,
				3937
			]
		},
		kineticArmor: {
			name: 'Kinetic Armor',
			skillLine: 992,
			skills: [
				3938,
				3939,
				3940,
				3941,
				3942
			]
		},
		flakArmor: {
			name: 'MAX FLAK Armor',
			skillLine: 6259,
			skills: [
				6302,
				6303,
				6304,
				6305,
				6306
			]
		}
	},
	sunderer: {
		naniteProximityRepairSystem: {
			name: 'Nanite Proximity Repair System',
			skillLine: 155,
			skills: [
				669,
				670,
				671,
				672,
				673,
				674
			]
		},
		vehicleAmmoDispenser: {
			name: 'Vehicle Ammo Dispenser',
			skillLine: 268,
			skills: [
				5829,
				5830,
				5831,
				5832
			]
		},
		gateShieldDiffuser: {
			name: 'Gate Shield Diffuser',
			skillLine: 2030,
			skills: [
				2959,
				5991,
				5992,
				5993
			]
		},
		mineGuard: {
			name: 'Mine Guard',
			skillLine: 2044,
			skills: [
				'xx',
				7450,
				7451,
				7452
			]
		},
		vehicleStealth: {
			name: 'Vehicle Stealth',
			skillLine: 2045,
			skills: [
				5839,
				5840,
				5841,
				5842
			]
		},
		advancedMobileStation: {
			name: 'Sunderer Advanced Mobile Station (S-AMS)',
			skillLine: 4224,
			skills: [
				5871
			]
		},
		blockadeArmor: {
			name: 'Blockade Armor',
			skillLine: 4227,
			skills: [
				'xx',
				7929,
				7930,
				7931
			]
		}
	},
	prowler: {
		anchoredMode: {
			name: 'Anchored Mode',
			skillLine: 186,
			skills: [
				837,
				838,
				839,
				840
			]
		},
		mineGuard: {
			name: 'Mine Guard',
			skillLine: 2017,
			skills: [
				'xx',
				7441,
				7442,
				7443
			]
		},
		reinforcedSideArmor: {
			name: 'Reinforced Side Armor',
			skillLine: 2020,
			skills: [
				2949
			]
		}
	},
	lightning: {
		fireSuppression: {
			name: 'Fire Suppression',
			skillLine: 236,
			skills: [
				6571,
				6572,
				6573,
				6574
			]
		},
		mineGuard: {
			name: 'Mine Guard',
			skillLine: 2058,
			skills: [
				8176,
				8177,
				8178,
				8179
			]
		}
	},
	harasser: {
		compositeArmor: {
			name: 'Composite Armor',
			skillLine: 2676,
			skills: [
				12931,
				12932,
				12933,
				12934
			]
		},
	},
	mosquito: {
		acquisitionTimer: {
			name: 'Acquisition Timer',
			skillLine: 203,
			skills: [
				930,
				931,
				932,
				933,
				934,
				935
			]
		},
		scoutRadar: {
			name: 'Scout Radar',
			skillLine: 2034,
			skills: [
				'xx',
				9057,
				9058,
				9059
			]
		}
	},
	liberator: {
		acquisitionTimer: {
			name: 'Acquisition Timer',
			skillLine: 211,
			skills: [
				974,
				975,
				976,
				977,
				978,
				979,
				980,
				981,
				982,
				983
			]
		},
		naniteAutoRepair: {
			name: 'Nanite Auto Repair',
			skillLine: 212,
			skills: [
				984,
				985,
				986,
				987,
				988
			]
		}
	},
	squadLeader: {
		priorityDeployment: {
			name: 'Spawn Beacon',
			skillLine: 1003,
			skills: [
				3983,
				3984,
				3985,
				3986
			]
		}
	}
};
