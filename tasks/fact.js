let n = 6;
let fact = 1;

for (let i = 1; i <= n; i++){
    fact *= i;
   
}
console.log(fact)

let num = 39;
let isprime = true;

for (let i = 2; i < num;i++){
    if (num % i == 0) {
        isprime = false;
        break;
    }
}
console.log(isprime?"prime" : "not prime")
