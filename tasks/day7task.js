// let num = Math.floor(Math.random()*100);
// console.log(num)

let number = 10;
let rannum = Math.floor(Math.random() * 100)
console.log(rannum)



while (true) {
    if (number == rannum) {
        console.log("you're right")
        break;
} else if (rannum < number) {
        console.log("lesser than")
        break;
} else {
    console.log("greater than")
    }
    break;
    
}


