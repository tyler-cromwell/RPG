const classes = {
  //          ['Druid', 'Hunter', 'Mage', 'Necrolord', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
  'Human':    [         'Hunter', 'Mage', 'Necrolord', 'Paladin', 'Priest', 'Rogue',           'Warlock', 'Warrior'], //-2
  'Dwarf':    [         'Hunter', 'Mage',              'Paladin', 'Priest', 'Rogue', 'Shaman',            'Warrior'], //-3
  'High Elf': ['Druid', 'Hunter', 'Mage',              'Paladin', 'Priest', 'Rogue',           'Warlock', 'Warrior'], //-2

  'Dark Elf': [         'Hunter', 'Mage', 'Necrolord',            'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-2
  'Orc':      [         'Hunter', 'Mage',                         'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-3
  'Saurus':   ['Druid', 'Hunter', 'Mage',              'Paladin', 'Priest', 'Rogue', 'Shaman',            'Warrior']  //-2
}


const Druid = {
  lvlStrength: 1,
  lvlPerception: 2,
  lvlEndurance: 5,
  //lvlCharisma: 3,
  lvlIntelligence: 5,
  lvlAgility: 1,
  lvlWillpower: 4
}


const Hunter = {
  lvlStrength: 5,
  lvlPerception: 3,
  lvlEndurance: 3,
  //lvlCharisma: 2,
  lvlIntelligence: 1,
  lvlAgility: 5,
  lvlWillpower: 1
}


const Mage = {
  lvlStrength: 1,
  lvlPerception: 4,
  lvlEndurance: 2,
  //lvlCharisma: 3,
  lvlIntelligence: 5,
  lvlAgility: 1,
  lvlWillpower: 5
}


const Necrolord = {
  lvlStrength: 4,
  lvlPerception: 1,
  lvlEndurance: 5,
  //lvlCharisma: 1,
  lvlIntelligence: 2,
  lvlAgility: 1,
  lvlWillpower: 5
}


const Paladin = {
  lvlStrength: 5,
  lvlPerception: 1,
  lvlEndurance: 4,
  //lvlCharisma: 3,
  lvlIntelligence: 2,
  lvlAgility: 1,
  lvlWillpower: 5
}


const Priest = {
  lvlStrength: 1,
  lvlPerception: 5,
  lvlEndurance: 2,
  //lvlCharisma: 3,
  lvlIntelligence: 4,
  lvlAgility: 1,
  lvlWillpower: 5
}


const Rogue = {
  lvlStrength: 4,
  lvlPerception: 5,
  lvlEndurance: 2,
  //lvlCharisma: 4,
  lvlIntelligence: 1,
  lvlAgility: 5,
  lvlWillpower: 1
}


const Shaman = {
  lvlStrength: 4,
  lvlPerception: 1,
  lvlEndurance: 2,
  //lvlCharisma: 2,
  lvlIntelligence: 5,
  lvlAgility: 5,
  lvlWillpower: 1
}


const Warlock = {
  lvlStrength: 1,
  lvlPerception: 5,
  lvlEndurance: 3,
  //lvlCharisma: 1,
  lvlIntelligence: 5,
  lvlAgility: 1,
  lvlWillpower: 3
}


const Warrior = {
  lvlStrength: 5,
  lvlPerception: 2,
  lvlEndurance: 5,
  //lvlCharisma: 2,
  lvlIntelligence: 1,
  lvlAgility: 3,
  lvlWillpower: 2
}


export {
  classes,
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Necrolord,
  Rogue,
  Shaman,
  Warlock,
  Warrior
}
