const classes = {
  //          ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
  'Human':    [                   'Mage', 'Paladin', 'Priest', 'Reaper', 'Rogue',           'Warlock', 'Warrior'], //-3
  'Dwarf':    [         'Hunter',         'Paladin', 'Priest', 'Reaper', 'Rogue', 'Shaman',            'Warrior'], //-3
  'High Elf': ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest',           'Rogue',           'Warlock', 'Warrior'], //-2

  'Dark Elf': [                   'Mage',            'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-3
  'Orc':      [         'Hunter',                    'Priest', 'Reaper', 'Rogue', 'Shaman', 'Warlock', 'Warrior'], //-3
  'Saurus':   ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest',           'Rogue', 'Shaman',            'Warrior']  //-2
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


const Paladin = {
  modHealth: 10,
  modStamina: 10,
  modMana: 10
}


const Priest = {
  modMana: 30
}


const Reaper = {
  modHealth: 10,
  modStamina: 10,
  modMana: 10
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
  Reaper,
  Rogue,
  Shaman,
  Warlock,
  Warrior
}
