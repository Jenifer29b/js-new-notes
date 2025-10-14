// rest operator in multiples 
function multipleall(...nums) {
    let multiplied = [];
    let add = 0
    for (let value of nums) {
        let result = value*3
       multiplied.push(add += result)
        
    }
    return add
}
console.log(multipleall(1, 2, 3, 4, 5, 6))



let color1 = ["red", "yellow", "green"]
let color2 = ["blue", "pink"]
console.log([...color1, ...color2])



function maxnum(...nums) {
    let value = 0;
    for (let values of nums) {
        if (values >= value) {
            value=values
        }
    }
    return value
}
console.log(maxnum(1, 2, 3, 4, 5))

function user(name, ...hobbies) {
    console.log("name :", name)
    console.log("hobbies :" , hobbies)
}
user("ruban", "reading", "writting")

function addall(...values) {
    let value = 0;
    for (let add of values) {
        value+=add
    }
    return value
}
console.log(addall(1,2,3,4,5))