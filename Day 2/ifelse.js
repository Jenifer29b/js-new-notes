let a = 2;

if (a >= 18) {
    console.log("eligble to vote")
} else {
    console.log("not able to vote")
}

let age = 90;

if (age < 10) {
    console.log("children :" , age)
} else if (age < 25) {
    console.log("adult :" , age)
} else {
    console.log("elder :" , age)
}

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



// switch (value = 20) {
//     case (value <= 10):
//         console.log("tens")
       
//     case (value <= 20):
//         console.log("twenties")
//     case (value <= 30):
//         console.log("thirty")
    
//     default:
//         console.log("fouty")
// }


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


