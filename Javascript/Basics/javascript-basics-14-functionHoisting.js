// ----------------  FUNCTION HOISTING  ----------------
display()

/*Not Allowed because values are not declared*/
// moreComplex()

// ----------------  VARIABLE HOISTING  ----------------

/* Returns Undefined*/
console.log(samuelito_uno)

// ----------------  VARIABLE DECLARATION  ----------------

/* Hoisting Allowed*/
var samuelito_uno = 'uno'
/* Hoisting Not Allowed*/
let samuelito_dos = 'dos'
const samuelito_tres = 'tres'

// ----------------  FUNCTION DECLARATION  ----------------

function display () {
  console.log('Hello')
}

function moreComplex () {
  console.log(`${samuelito_uno}${samuelito_dos}${samuelito_tres}`)
}

// ----------------  SAFE CALLING  ----------------

console.log(samuelito_tres)
console.log(samuelito_dos)
console.log(samuelito_uno)
display()
moreComplex()