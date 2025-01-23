// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Soumik"
const val = 13.3
const isLogged = false
const age = null
let user
const id = Symbol('476')
const id2 = Symbol('476')
console.log(id==id2);//false
const bigNum = 73254765754754n


// Reference (Non Primitive)

// 3 types : Array, Objects, Functions 

//Array
const cricketer = ["Virat","ABD","Siraj"]

// Object
let obj1 ={
    name: "Soumik",
    age : 20,// "," is mandatory
}
console.log(obj1);

// Function

const myFunc = function(){
    console.log("Hello World");
}
console.log(typeof myFunc);
