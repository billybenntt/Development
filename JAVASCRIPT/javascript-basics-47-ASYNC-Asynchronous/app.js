// -------------- HOISTED FUNCTION  --------------

function boilWater (time) {
  console.log('Boiling....')

  setTimeout(() => {
    console.log(`Done boiling ${time/1000} minutes`)
  }, time)

}

// -------------- ASYNCHRONOUS EXAMPLE --------------

/* If Js is Busy, this will run after it's busy*/

boilWater(10000)
console.log("Chop Carrots")

/* This keeps Javascript Busy */

for (let i = 0; i < 100000; i++) {
  console.log("Busy")
}

/* 1 Second Minimum Time*/


