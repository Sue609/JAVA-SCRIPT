let grade = "Pizza";

switch(grade){
    case "A":
        console.log("You did great!");
        break;

    case "B":
        console.log("You did good!");
        break;

    case "C":
        console.log("You did okay!");
        break;

    case "D":
        console.log("You barely passed! Pull up your socks!");
        break;

    case "F":
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "ia not a letter grade!");
}