
let fact = 1;

for (let i = 1; i <= 5; i++){
    fact *= i;
}
console.log(fact)

let fact1 = 1;

for (let i = 1; i <= 10; i++){
    fact1 *= i
    
}
console.log(fact1)

let num = 456321;
let rev = parseInt(num.toString().split('').reverse().join(''))
console.log((rev))

let prime = 31;
let isprime = true

for (let i = 2; i <= Math.sqrt(prime); i++){
    if (prime % i == 0) {
        isprime = false;
        break;
    }
}
console.log(isprime ? "prime num" : "not an prime")



// for (let i = 2; i <= 50; i++){
// let prime1 = true;
   
//     for (let x = 2; x <= Math.sqrt(i); x++){
//         if (i % x == 0) {
//             prime1 = false;
//             break
//         }

//     }
//     if (prime1) {
//          console.log(i)
//      }
    
// }

// for (let i = 1; i <= 5; i++){
//     let row = ''
//     for (let j = 1; j <= i; j++){
//         row += '*';
//     }
//     console.log(row)
// }

// for (let i = 1; i <= 5; i++){
//     let row = ''
//     for (let j = 1; j <= 5; j++){
//         row += '*';
//     }
//     console.log(row)
// }


// for (let i = 1; i <= 5; i++){
//     let row = '';
//     for (let j = 1; j <= i; j++){
//         row += j;
//     }
//     console.log(row)
// }

let n = 10;
let a = 1;
let b = 2

for (let i = 1; i <= n; i++){
    let c = a + b;
    console.log(c)
    a = b;
    b = c;
}

