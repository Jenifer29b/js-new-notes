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

let n = Number(prompt("enter an number:"));
let fact = 1;

for (let i = 1; i <= n; i++){
    fact *= i;
   
}
console.log(fact)

let num = 17;
let isprime = true;

for (let i = 2; i < num;i++){
    if (num % i == 0) {
        isprime = true;
        break;
    }
}
console.log(isprime?"prime" : "not prime")