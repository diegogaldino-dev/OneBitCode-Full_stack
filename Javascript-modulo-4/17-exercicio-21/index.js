const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const arthur = new Mage('Arthur', 90, 4, 2, 14)
const diego = new Thief('Diego', 180, 22, 8)
const cain = new Warrior("Cain", 200, 14, 12, 4)


console.table({arthur, diego, cain})

cain.switchStance()
arthur.attack(cain)
diego.attack(arthur)

console.table({arthur, diego, cain})
cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)


console.table({arthur, diego, cain})

