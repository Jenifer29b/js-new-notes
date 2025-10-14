function add(a, b) {
    return (a+b)
}
console.log(add(5, 6))


function multiples(value) {
    let sum = [];
    for (let add of value) { 
        sum.push(add*add)
    }
    return sum
}
console.log(multiples([2,3,4]))