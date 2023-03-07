class User{
  constructor(fullname, email, password){
  this.fullname = fullname
  this.email = email
  this.password = password
}

login(email, password){
  if(this.email === email && this.password === password){
    console.log('Login realizado com sucesso!')
  } else {
    console.log('Falha ao fazer login! Email ou senha incorreta.')
  }
}

}

const john = new User("John Doe", "john@email.com", "1234" )

console.log(john)
john.login("john@email.com", "1234")