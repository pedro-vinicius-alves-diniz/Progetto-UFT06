const secLogin = document.getElementById("login")
const secRegistro = document.getElementById("registro")
const btnRegistro = document.getElementById("btn-registro")

// EVENTI
btnRegistro.addEventListener("click", () =>{
    secLogin.style.display = "none"
    secRegistro.style.display = 'flex'
})