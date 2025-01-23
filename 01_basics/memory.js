// Stack (Primitive) & Heap (Non-Premetive)

// Stack
let myName = "Soumik"
let anotherName = myName
// console.table([myName,anotherName])
anotherName ="Akash"//get a copy in stack as same name

console.table([myName,anotherName])

// Heap
let user1={
    name:"Soumik",
    age :13,
}
let user2= user1;
user2.name ="Akash"

console.table([user1,user2])//Same reference so original value change 