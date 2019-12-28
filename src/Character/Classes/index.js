const classes = {
  //          ['Druid', 'Hunter', 'Mage', 'Necrolord', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
  'Human':    [         'Hunter', 'Mage', 'Necrolord', 'Paladin', 'Priest', 'Rogue',           'Warlock', 'Warrior'], //-2
  'Dwarf':    [         'Hunter',                      'Paladin', 'Priest', 'Rogue', 'Shaman',            'Warrior'], //-4
  'High Elf': ['Druid', 'Hunter', 'Mage',              'Paladin', 'Priest', 'Rogue',           'Warlock', 'Warrior'], //-2

  'Dark Elf': [         'Hunter', 'Mage', 'Necrolord',            'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-2
  'Orc':      [         'Hunter',                                 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-4
  'Saurus':   ['Druid', 'Hunter', 'Mage',              'Paladin', 'Priest', 'Rogue', 'Shaman',            'Warrior']  //-2
}


const Druid = {
  modMana: 30
}


const Hunter = {
  modHealth: 10,
  modStamina: 20
}


const Mage = {
  modMana: 30
}


const Necrolord = {
  modHealth: 10,
  modStamina: 10,
  modMana: 10
}


const Paladin = {
  modHealth: 10,
  modStamina: 10,
  modMana: 10
}


const Priest = {
  modMana: 30
}


const Rogue = {
  modHealth: 10,
  modStamina: 20
}


const Shaman = {
  modMana: 30
}


const Warlock = {
  modMana: 30
}


const Warrior = {
  modHealth: 20,
  modStamina: 10
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
