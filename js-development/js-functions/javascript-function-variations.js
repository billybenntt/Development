// Regular Function
function plantNeedsWaterA(day) {
    if(day === "Wednesday"){
        return true;
    }    else{
        return false
    }
}
// Regular Function - Simplified
function plantNeedsWaterA2(day) {
    return day === "Wednesday";
}
// Expression Function
const plantNeedsWaterB = function (day)
 {    if(day === "Wednesday"){
        return true;
    }    else{
        return false
    }
}
// Expression Function - Simplified
const plantNeedsWaterB2 = function (day) {
    return day === "Wednesday";
}
// Arrow Function
const plantNeedsWaterC = (day) => {
    if(day === "Wednesday"){
        return true;
    }    else{
        return false
    }
}
// Arrow Function  Simplified
const plantNeedsWaterC2 = (day) => {
 return day === "Wednesday";
}
const plantNeedsWaterD = (day) => day + 1
// Arrow Compact Function - Simplified 1 Parameter
const plantNeedsWaterD2 = day =>  day === "Wednesday";
// Arrow Compact Function - Simplified 2 Parameters
const plantNeedsWaterD3 = (day, night) =>  day + night === "Wednesday";

