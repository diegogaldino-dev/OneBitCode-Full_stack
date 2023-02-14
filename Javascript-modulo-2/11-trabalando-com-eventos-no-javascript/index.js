function register(e){
  console.log(e)
  const sectionElement = e.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value
  
  if(password === passwordConfirmation){
    alert('Usuario ' + username + ' registrado!')
  }else{
    alert('As senhas não conferem!')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)


function removerListener(){
  button.removeEventListener('click', register)
  alert('Event Remove')
}