// hoisting in Javascript means the declaring variabe moves to the top of the code .
// here let and const hoisted and results to before initalization 
// but var moves to top and resuts to undefined

console.log(num)
var num = 10;


greet();
function greet() {
    console.log("hello")
}


