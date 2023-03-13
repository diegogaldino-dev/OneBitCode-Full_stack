function imc(weight, height){
  return new Promise((resolve, reject) => {
    if (typeof weight !== 'number' || typeof height !== 'number'){
      reject('arguments must be of type number')
    }else{
      resolve(weight / (height *  height))
    }
  })
}

function showImc(weight, height){
  imc(weight, height).then((result) =>{
    console.log(`O resultado do IMC foi de ${result}.`)
    if(result < 18.5) console.log('Situação: MAGRAZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
  }).catch((err) =>{
    console.log(err)
  })
  console.log(`Calculando o IMC para peso ${weight} e altura ${height}....`)
}

showImc(90, 1.85)
showImc(80, 1.75)
showImc(90, 'texto')
showImc(54, 1.65)
showImc(40, 1.30)
