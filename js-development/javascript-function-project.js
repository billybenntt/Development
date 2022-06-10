// Get Sleep Hours

const getSleepHours = (day) => {
    day = day.toLowerCase();
    let hoursOfSleep;
    switch (day) {
        case "monday":
            hoursOfSleep = 8;
            break;
        case "tuesday":
            hoursOfSleep = 8;
            break;
        case "wednesday":
            hoursOfSleep = 8;
            break;
        case "thursday":
            hoursOfSleep = 8;
            break;
        case "friday":
            hoursOfSleep = 8;
            break;
        case "saturday":
            hoursOfSleep = 44;
            break;
        case "sunday":
            hoursOfSleep = 8;
            break;
        default:
            hoursOfSleep = 0;
            break;
    }
    return hoursOfSleep;
}

// Get Actual Sleep Hours

const getActualSleepHours = () => {

    let totalHours =
        getSleepHours("Monday") +
        getSleepHours("Tuesday") +
        getSleepHours("Wednesday") +
        getSleepHours("Thursday") +
        getSleepHours("Friday") +
        getSleepHours("Saturday") +
        getSleepHours("Sunday")
    return totalHours;

}

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    const difference = actualSleepHours - idealSleepHours;

    if (actualSleepHours === idealSleepHours){
        console.log(`user got the perfect amount of sleep`)
    }
 else if (actualSleepHours > idealSleepHours){
        console.log(`user got more sleep than needed Overslept: ${difference} hours`)
    }
  if (actualSleepHours < idealSleepHours){
        console.log(`user should get some rest Under slept ${difference} hours`)
    }

}

calculateSleepDebt();