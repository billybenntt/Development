const form = document.querySelector("form")
const input = document.querySelector("input")



form.addEventListener("keyup", (e)=>{

  e.preventDefault()
  console.log(input.value)
})