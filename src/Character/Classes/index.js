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
}


const Hunter = {
}


const Mage = {
  lvlStrength: 1,
  lvlPerception: 4,
  lvlEndurance: 2,
  lvlCharisma: 3,
  lvlIntelligence: 5,
  lvlAgility: 1,
  lvlWillpower: 5
}


const Necrolord = {
}


const Paladin = {
}


const Priest = {
}


const Rogue = {
}


const Shaman = {
}


const Warlock = {
}


const Warrior = {
  lvlStrength: 5,
  lvlPerception: 2,
  lvlEndurance: 5,
  lvlCharisma: 1,
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
