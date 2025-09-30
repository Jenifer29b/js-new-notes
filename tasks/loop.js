// let num = 5;

// for (let i = 1; i <= num; i++){
//     console.log(i)
// }

let num = 24;
let isprime = true;

for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i == 0) {
        isprime = false;
        break
    }
}
console.log(isprime ? "prime" : "not prime")


let n = 5; //no:of : times
let a = 5;  // Starting number
let b = 5; // starting second number

for (let i = 1; i <= n; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

let str = "hello"

console.log(str.split('').reverse().join(''))


let number = 12345;

let str1 = parseInt(number.toString().split('').reverse().join(''))
console.log(typeof(str1))




let num1 = 10;
let num2 = num1.toString()

console.log(typeof(num2))
