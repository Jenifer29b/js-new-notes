let names = "ruban"

function greet() {
    console.log("hello!!" , names)
}
greet()

function sayhii() {
    let name1 = "jeni"
     console.log("hello",name1)
}
sayhii()
// console.log(name1) // here let is local scope cannot access outside function

// block function
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a,b,c)
}
// console.log(c)  // b and c can only access within the {} braces but a cannot also access outside


//hoisting
console.log(num)
var num = 10; // var = undefined

// console.log(num1)
// const num1 = 10; // const and let = cannot access before initilization

//counter

function makecounter() {
    let count = 0;
    return function(){
        count++;
        console.log(count)
    } 
    
}
let counter = makecounter()
counter()
counter()