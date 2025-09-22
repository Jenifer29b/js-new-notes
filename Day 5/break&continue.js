// break means the exit the loop immediately when break condiiton meets ... 
// it doesn't wait to entire loop to excetue

for (let i = 1; i <= 10; i++){
    if (i == 5) break;
    console.log("break count : ", i)
}

// continue means it terminates the particular exceution(condiiton of continue) 
// and continues the next exceution. 
// it doesn't the stop the entire exceution only the continue condition doesn't exceute

for (let a = 1; a <= 10; a++){
    if (a == 5) continue;
    console.log("continue count:" , a)
}