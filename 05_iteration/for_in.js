const myObject = {
    name: "Soumik",
    age: 18,
    gf: "Sneha",
}
for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
    
}

const arr= ["Soumik",1,0,true]
for (const key in arr) {
    console.log("\n");
    console.log(`${key} - index\n${arr[key]} - Value`)
    
}