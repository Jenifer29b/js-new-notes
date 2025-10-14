// rest operator in javascript (...) is used to collect individual(multiple) arguments into single array
// rest operator  can't handle array arguments directly 

function multiple(...arr) {
    let multiples = [];
    for (let value of arr) {
        multiples.push(value*value)
    }
    return multiples
}
console.log(multiple(1, 2, 3, 4, 5)) 

function add(values) {
    let addvalue = [];
    for (let addnum of values) {
        addvalue.push(addnum+=addnum)
    }
    return addvalue
}
console.log(add([1,2,3,4,5]))