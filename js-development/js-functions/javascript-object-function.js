// Object Declaration
let spaceship = {
    homePlanet: 'Earth',
    color: 'red'
};


let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj);
};


const changeColor = obj =>{
    obj.color = "blue";
}

// Calling Function
console.log("auto Reassignment")
tryReassignment(spaceship)
console.log(spaceship);

// Manual reassignment

console.log("Manual Reassignment")
spaceship = {
    identified: false,
    'transport type': 'flying'
};
console.log(spaceship)


changeColor(spaceship);
console.log(spaceship)
console.log(spaceship)