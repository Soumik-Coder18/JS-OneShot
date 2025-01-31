// for of

// ["","",""]
// [{},{},{}]
 
const arr = ["Soumik",1,2,true]
for (const val of arr) {
    console.log(val);
}

const string = "Welcome to my youtube channel"
for (const i of string) {
    if (i==" "){
        continue;
    }
    console.log(`The character is ${i}`);
    
}

// Map

const map=new Map();
map.set('IND',"India")
map.set('BAN',"Bangladesh")
map.set('USA',"United State Of America")
map.set('IND',"India")//It will not print cause unique value will print
console.log(map);

for (const [key,val] of map) {
    console.log(`${key} :- ${val}`);
    // We cann't do for object same thing 
}
