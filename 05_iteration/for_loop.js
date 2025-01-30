// For
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    if (element==5) {
        console.log("5 is best number");
    }
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop ${j} and outer loop ${i}`);    
    } 
}


for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(`${i}*${j}=${i*j}`);
        
    }
    console.log("\n");
}

const series = ["Alice in borderland","All of us are dead","Squid game"]
console.log(series.length);
for (let i = 0; i < series.length; i++) {
    const element = series[i];
    console.log(element);
}

// break and continue
for (let i = 0; i < 20; i++) {
    if (i==5){
        console.log("5 detected");
        break;
    }
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i==5){
        console.log("5 detected");
        continue;
    }
    console.log(i);
}