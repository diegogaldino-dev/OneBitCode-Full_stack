const App = require("./App")

App.createUser('diego@email.com', 'Diego Galdino')
App.createUser('day@email.com', 'Dayane Tico')
App.createUser('marinez@email.com', 'Marinez Galdino')

App.deposit("diego@email.com", 100)

App.transfer("diego@email.com", 'day@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('marinez@email.com', 2000 , 24)

console.log(App.findUser('diego@email.com'))
console.log(App.findUser('diego@email.com').account)

console.log(App.findUser('day@email.com'))
console.log(App.findUser('day@email.com').account)

console.log(App.findUser('marinez@email.com'))
console.log(App.findUser('marinez@email.com').account)
console.log(App.findUser('marinez@email.com').account.loans[0].installments)

