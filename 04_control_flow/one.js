// If
let score =40
if (score>=40) {
    console.log("Pass");
}
else{
    console.log("Fail");
}

const money=1000
if (money <500) {
    console.log("Less than 500");
}
else if (money <800) {
    console.log("Less than 800");
}
else if (money <1000) {
    console.log("Less than 1000");
}
else {
    console.log("more than 1000");
}

const isLogged = true
const debit = true 
const age = false
if (isLogged && debit) {
    console.log("Approved");
}
if (debit || age) {
    console.log("Approved");
}