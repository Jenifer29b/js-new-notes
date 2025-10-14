function checknum(a) {
    if (a % 2 == 0) {
        return("even")
    } else {
        return("odd")
    }
}
console.log(checknum(5))

function findmax(a, b) {
    if (a > b) {
        return(`a is bigger ${a}`)
    } else {
        return("b is bigger",b)
    }
}
console.log(findmax(10, 5))
console.log(findmax(5, 9))

function fact1(a) {
    let fact = 1;
    for (let i = 1; i <= a; i++){
        (fact *= i)
    }
    return fact
}
console.log(fact1(5))


function square(values) {
    let squares = [];

    for (let value of values) {
        squares.push(value*value)
    }
    return squares
}
console.log(square([1, 2, 3]))


let value = "aeiouAEIOU"

function vowels(name) {
    if (value.includes(name)) {
        console.log("vowels")
    }
    return name

}
console.log(vowels("jeni"))


