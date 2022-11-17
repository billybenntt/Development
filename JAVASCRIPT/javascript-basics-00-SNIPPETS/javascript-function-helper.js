
// Helper Function
function monitorCount(rows, columns) {
    return rows * columns;
}
// Main Function
function costOfMonitors (rows, columns){
    return  monitorCount(rows,columns) * 200;
}
// Value Assignment
const totalCost = costOfMonitors(5,4);
// Value Logging
console.log(totalCost);


