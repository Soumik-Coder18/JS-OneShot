const email = ""//blank string
if (email) {
    console.log("email found");
}
else{
    console.log("Not found");
}

const email1 = []//blank Array
if (email1) {
    console.log("email found");
}
else{
    console.log("Not found");
}

// Falsy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN 

// Except falsy value all are truthy value
// Truthy value 
// "flase",'0'," ",[],{},function(){}

const user=[]
if (user.length===0) {
    console.log("Empty Array");
}

const obj= {}
if (Object.keys(obj).length===0) {
    console.log("Empty Object");
}

// Nullish coalesing Operator (??):null undefined
let val1;
val1 = 5 ?? 6
console.log(val1);
let val2;
val2 = null ?? 10
console.log(val2);
let val3;
val3 = undefined ?? 20
console.log(val3);


// terniary operator
// condition ? true : false

const money = 80
money <= 100 ? console.log("less than 100"):console.log("More than 100");

