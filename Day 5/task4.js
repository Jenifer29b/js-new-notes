//break and continue tasks

for (let i = 1; i <= 10; i++){
    if (i == 7)break;
    console.log("break",i)
}

for (let i = 1; i <= 10;i++){
    if (i == 6) continue;
    console.log("continue",i)
}

let num = 1;

while (true) {
    let x = (num*3)
    if (x > 10) break;
    console.log(x)
    num++
}

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) continue;
        console.log(i)
    
}