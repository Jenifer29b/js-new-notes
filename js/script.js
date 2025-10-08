let a = 10;
let b = 5;
console.log(a + b)

// alert("hello")

// let x = prompt("enter an number")
// console.log(x)
// console.log((Number(x) + 10))

// let mark = Number(prompt("enter your mark"));

// switch (true) {
//     case (mark >= 90):
//         console.log("Grade A");
//         break;
//     case (mark >= 80):
//         console.log("Grade B");
//         break;
//     case (mark >= 70):
//         console.log("Grade C");
//         break;
//     case (mark >= 60):
//         console.log("Grade D");
//         break;
//     default:
//         console.log("Grade E");
//         break;
// }

// let num = Number(prompt("enter the number : "))
// console.log(num)

// while (num==0) {
//     console.log("zero")
//     num++
// }
// console.log(num)

// let pass

// do {
//     pass = prompt("enter the password:")
//     console.log("password not ok")
    
// } while (pass !== admin123)
    
//     console.log("password ok")

// let n = Number(prompt("enter an number:"));
// let fact = 1;

// for (let i = 1; i <= n; i++){
//     fact *= i;
   
// }
// console.log(fact)


// let num = Number(prompt("enter an number"))
// let rev = parseInt(num.toString().split('').reverse().join(''))
// console.log(rev)

// let prime = Number(prompt("enter an number :"))
// let isprime = true;

// for (let i = 2; i <= Math.sqrt(prime); i++){
//     if (prime % i == 0) {
//         isprime = false;
//         break
//     }
// }
// console.log(isprime ? "prime num" : "not an prime")


// let fib = Number(prompt("enter an num series:"))

// let x = 1; let y = 2;

// for (let i = 1; i <= fib; i++){
//     let c = x + y;
//     console.log(c)
//     x = y
//     y = c;
// }

let num = Number(prompt("enter any number : "))
let rannum = Math.floor(Math.random() * 10)
console.log(num)
console.log(rannum)

while (true) {
    if (num == rannum) {
        console.log("you're right")
        break;
} else if (num < rannum) {
        console.log("lesser than")
        break;
} else {
    console.log("greater than")
    }
    break;
    
}