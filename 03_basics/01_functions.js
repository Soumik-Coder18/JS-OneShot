// Function //

function myName(){
console.log("S")
console.log("O")
console.log("U")
console.log("M")
console.log("I")
console.log("K")
}
myName() //calling the function 

function addNum (num1,num2){
    console.log(num1+num2);//This use to print only 
}
// addNum(3,4)
const result = addNum(3,4)
console.log("Result: ",result); // showing undefined cause it just printing function

function subNum(num1,num2){
    let result = num1 - num2
    return result
    // retun num1 - num2 // We can also do that 
    console.log("Soumik");// nothing after return will print
}
const res = subNum(5,4)
console.log("Result: ",res);

function userLogin(userName){
    return `${userName} is logged in`
}
// userLogin("Soumik") // It will not print anything
console.log(userLogin("Soumik"));
console.log(userLogin());// If I don't pass the parameter the it will show undefined
// Condition for undefined function call 
function userAge(age){
    if (age===undefined){
        console.log("Please enter the age !");
        return
    }
    return `${age} is logged in`
}
console.log(userAge());

// Default parameter
function userMob(mob=72982982973/*Deafult parameter*/){
    if (!mob){
        console.log("Please enter the Mob no !");
        return
    }
    return `${mob} is number`
}
console.log(userMob());
console.log(userMob(32767623969));