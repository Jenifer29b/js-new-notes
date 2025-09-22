//For Loop Tasks :

//numbers from 1-20
for (let i = 1; i <= 20; i++){
    let num = i;
    console.log(num)
}

//numbers divided by 2
for (let i = 2; i <= 50; i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}

// multiply of 7
let num = 7
for (let a = 1; a <= 10; a++){
    console.log(`${num} * ${a} = ${num*a} `)
}

// sum of numbers 
let x = 1;
for (let i = 0; i <= 100; i++){
     x+=i
}
console.log( "sum of numbers:", x)


//factirol
let fact = 2;
for (let i = 1; i <= 5; i++){
    fact *= i
   
}
console.log("factriol :",fact)
