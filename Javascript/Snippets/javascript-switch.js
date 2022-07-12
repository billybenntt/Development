let myTestValue = "Value"

switch (myTestValue) {
    // Test Case
    case "Value":
        // Action
        console.log("Print this Value");
        // Continue to Next Statement
        break;

    case "test":
        console.log("Print this other Value");
        break;

    case "test32":
        console.log("Print this other Value");
        break;

    // Default if nothing Above
    default:
        console.log("Print this other Value");
        break;

}