function subnum(...nums) {
    let sub = 0;
    for (let value of nums) {
        sub=value-sub
    }
    return sub
}
console.log(subnum(100, 20, 10))

 