import quotes from "./quotes.js"


let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote");
let person = document.querySelector(".person")


btn.addEventListener("click", ()=>{
    quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote
    person.innerText = quotes[Math.floor(Math.random() * quotes.length)].person
})