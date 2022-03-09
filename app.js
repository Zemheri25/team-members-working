const body = document.querySelector("body")
const darkMode = document.querySelector(".form-switch")
const navBar =document.querySelector(".nav")
const mainContainer = document.querySelector("main .container")
const cards = document.querySelectorAll(".card")
console.log("merhaba");
darkMode.addEventListener("change",(e)=>{
    navBar.classList.toggle("bg-dark");
    navBar.classList.toggle("text-light");
    mainContainer.classList.toggle("bg-dark");
    mainContainer.classList.toggle("text-light");
    body.classList.toggle("bg-dark");
    cards.forEach((card)=>{
        card.classList.toggle("bg-dark");
        card.classList.toggle("text-light");
    })
    
    
})