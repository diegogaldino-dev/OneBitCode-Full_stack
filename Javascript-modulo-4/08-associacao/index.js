const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, "centro", "São Paulo", "SP")
const john = new Person("John Doe", addr)


console.log(john)
console.log(john.address.fullAddress())