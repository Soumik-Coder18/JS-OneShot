// Singleton
// Object.create()

// Object Literals 
const myKey= Symbol("key1")

const jsUser = {
    name : "Sneha ",
    [myKey] : "KEY",//This is how key should be represented using []
    age : 20,
    isLogged : true,
    email : "sneha12@gmail.com",
    lastLogin : ["Friday","Sunday"],
}

console.log(jsUser.email)//way_1
console.log(jsUser["lastLogin"]);//way_2
console.log(jsUser[myKey]);//way_Symbol
console.log(typeof jsUser[myKey]);

jsUser.email = "Soumik267@gmail.com"
console.log(jsUser);

// Object.freeze(jsUser)//Now noone cann't overwrite anything inside the object

// jsUser.email = "bag@gmail.com"
// console.log(jsUser);//nothing changed
jsUser.greeting = function(){
    console.log("Hello users!!!!");   
}
console.log(jsUser);
console.log(jsUser.greeting());
jsUser.greeting2 = function(){
    console.log(`Hello users!!!!${this.name}`);   
}
console.log(jsUser.greeting2());