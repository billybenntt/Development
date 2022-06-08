let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true;
let runnerAge = 12;


if (runnerAge >= 18 && isEarly){
    raceNumber += 1000;
    console.log(`You early dude, your race number is ${raceNumber} and you can run at 9:30`);
}else if(runnerAge >= 18 && !isEarly){
    raceNumber += 1000;
    console.log(`You are late!, your race number is ${raceNumber} and you run at 11:00`);
}
else {
    console.log(`You are youth!, your race number is ${raceNumber} and you run at 12:30`);
}





