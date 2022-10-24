// ------ THIS KEYWORD ARROW FUNCTIONS -------------

/*Show the current object data*/
function showTHis ()  {
  console.log(this)
}

/*Assign Functions to objects*/
const person_one ={
  name: 'John',
  showTHis: showTHis
}
const person_two ={
  name: 'Ted',
  showTHis: showTHis
}


person_one.showTHis()
person_two.showTHis()
showTHis()

// ------ TESTING BUTTONS  -------------

const button1 = document.getElementById("btn-1")
const button2 = document.getElementById("btn-2")


/* Arrow function - This references the Window object*/
button1.addEventListener("click", ()=>{
  console.log(this)
  this.document.body.style.backgroundColor = "red"
})

/* Regular Function - This references the button itself*/
button2.addEventListener("click", function () {
  console.log(this)
   this.style.backgroundColor = "blue"
})
