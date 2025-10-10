let a = 2;

if (a >= 18) {
    console.log("eligble to vote")
} else {
    console.log("not able to vote")
}

// if else statments use to check the multiple condiitons whether true or false 

let age = 90;

if (age < 10) {
    console.log("children :" , age)
} else if (age < 25) {
    console.log("adult :" , age)
} else {
    console.log("elder :" , age)
}


// switch conditions means one condition with multipy possibilities at that time we use switch case
let day = 1;

switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    default:
        console.log("wednesday")

}

let num1 = 25;
let num2 = 30;
let operator = "+"

switch (operator) {
    case "+":
        console.log("addition" , num1+ num2)
        break;
    case "-":
        console.log("addition" , num1- num2)
        break;

    default:
        console.log("invalid")
        break;
}



//switch case with true keyword means it checks the value of each case only 
// when the case is true that condiiton only exceute

const value = 20

switch (true) {
    case (value<=10): 
        console.log("true")
        break;
    case (value<=20): 
        console.log("false")
        break;

    default:
        console.log("undefined")
        break;
}


let temp = 24;

switch (true) {
    case (temp < 50):
        console.log("hot")
        break;
    case (temp > 100):
        console.log("cold")
        break;
    default:
        console.log("invalid")
        break;
}