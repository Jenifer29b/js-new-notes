let x = 12;
console.log(x >= 18 ? "able to vote" : "not able to vote")


let y = false ;
console.log(y ?? "this is empty")
console.log(y || "this is empty")

const user = { age: 13 , name : "jenii" }
console.log(user.name ?? "undefined")

const z = {
    profile : {
        name: "jennifer",
        address: "chennai"
    },
    place: {
        state : "delhi"
    }

}

console.log(z.profile?.name)
console.log(z.profile?.address)
console.log(z.profile?.place?.state);

const user1 = {
    profile: {
        name: "ruban",
        contact : 123
    }
}
console.log(user1.profile?.place ?? "null")
