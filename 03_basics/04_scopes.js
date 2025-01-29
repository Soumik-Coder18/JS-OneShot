let a= 10// Global scope 
const b=23 
if (true) {
    a=100
    console.log("Inside:",a); //Inside {} local scope
}
console.log(`Outside:`,a);

// Nested scope 

function one(){
    userName="Soumik"
    function two(){
        age= 20
        console.log(userName);
    }
    // console.log(age); // This cann't define outside the function
    two()
}
one()

if (true) {
    const name= "Sneha "
    if (true) {
        const bf = "+ Soumik"
        console.log(name+bf);
    }
    // console.log(bf); //Error
}
// console.log(name); //Error

// ++++++Interesting++++++
console.log(addOne(5));//We can declare before the function 
function addOne(num){
    return num+1
}
console.log(addOne(5));

// console.log(addTwo(6)); //We cann't call it before
const addTwo = function(num){
    return num+2
}
console.log(addTwo(6));
