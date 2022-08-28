window.addEventListener('DOMContentLoaded', function () {

    const correo = document.querySelector(".correoAlex")
    console.log(correo)
    correo.addEventListener("keydown",()=>{
        correo.classList.add("redAlex")

    })

    const form = document.querySelector("#login-form")

    form.addEventListener("submit",(event)=>{
      event.preventDefault()


        

    })


})
