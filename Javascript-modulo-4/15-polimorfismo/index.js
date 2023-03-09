class Vehicle {
  move(){
    console.log("O veiculo esta se movendo")
  }
}

class Car extends Vehicle {
  move(){
    console.log('O carro esta se movendo')
  }
}


class Ship extends Vehicle{
  move(){
    console.log('o navio esta navegando')
  }
}

class Aircraft extends Vehicle{
  move(speed){
    console.log(`A aeronove esta voando a ${speed} km`)
  }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoh = new Aircraft()

delorean.move()
blackPearl.move()
epoh.move(80)

function start(vehicle){
  console.log('Iniciando um veiculo....')
  vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoh)