// If else tasks

let number = 100

if (number >= 0) {
    console.log("positive")
} else if (number < 0) {
    console.log("negative")
} else {
    console.log("invalid")
}

let leap = 2024;

if (leap % 4 === 0) {
    console.log("leap year")
} else {
    console.log("not a leap year")
}

//switch Tasks

let month = 3;

switch (month) {
    case 1:
        console.log("Janauary")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("april")
        break;
        case 5:
        console.log("may")
        break;

    default:
        console.log("dec")
        break;
}


let num1 = 10;
let num2 = 10;
let operator = "+"

switch (operator) {
    case "+" :
        console.log("addition" , num1+num2)
        break;

    default:
        console.log("invalid")
        break;
}

let temp = 30;

switch (true) {
    case (temp < 20):
        console.log(" extreme cold")
        break;
    case (temp >= 20):
        console.log("cold")
        break;
    case (temp >= 35):
        console.log("hot")
    default:
        break;
}