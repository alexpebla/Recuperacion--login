window.addEventListener('DOMContentLoaded', function () {

  const correo = document.querySelector(".correoAlex")
  console.log(correo)
  correo.addEventListener("keydown",()=>{
      correo.classList.add("azulAlex")

  })

  const form = document.querySelector("#login-form")

  form.addEventListener("submit",(event)=>{
    event.preventDefault()

  })

  const password = document.querySelector(".password")   
  password.addEventListener("keydown", ()=> {
    password.classList.add("azulAlex")
  })

  })