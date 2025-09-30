
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