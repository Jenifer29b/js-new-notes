//scope in js 

let names = "ruban"  // here names is a global scope we can access from anywhere in code

function greet(){
    console.log("hello" , names)
}
greet()

function sayhi() {
    let names2 = "jeni"   // here names2 is local or function scope we can only declare and access within the function 
    console.log("hello" , names2)
}
sayhi()
// console.log(names2) // here names2 cannot access because it can only access within the function

{
    let a = 10;
    const b = 10;
    var c = 10;
    console.log(a,b,c) // here a,b are block scope because it can only access within the {} curly braces
}
// console.log(a)
// console.log(b)
console.log(c);

// here var is the global scope it can also access outside {} braces