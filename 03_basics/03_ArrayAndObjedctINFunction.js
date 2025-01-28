const user = {
    name : "Soumik",
    age: 18,
}
function handleObject(anyObject){
    console.log(`User name is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(user)
handleObject({
    name: "Sneha",
    age: 17,
})//Direct obeject passing through function

// Array

const myArray = [1,10,20,4]
function func(arrayfunc){
    return arrayfunc[2] //Index of the array
}
console.log(func(myArray));
console.log(func([397,38,2762,2969,827,2]));