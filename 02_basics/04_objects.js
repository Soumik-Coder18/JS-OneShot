// Singleton
const user = new Object()
user.name = "Soumik"
user.id = 11
user.isLogged = false
console.log(user);

// Nested object
const user2 = {
    fullName: {
        userFullName:{
            name1: "Soumik",
            surname: "Bag",
        }
    }
}
console.log(user2.fullName.userFullName.surname);//way of getting details in a nested object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} //create nested object 
const obj3 = Object.assign(obj1,obj2) //This the way of representation
console.log(obj3);
const obj4 = {...obj1,...obj2}
console.log(obj4);

// Array Object 
const new_Object = [
    {
        a:"H",
        b:"A",
    },
    {
        c:"p",
        d:"p",
    },
    {
        e:"y",
    }
]

console.log(new_Object);
console.log(new_Object[2].e)

// const ou= {...new_Object[0],...new_Object[1],...new_Object[2]}
// console.log(ou);

// Methods -------
console.log(Object.keys(user));// Describe the keys 
console.log(Object.values(user));//Values
console.log(Object.entries(user));//[key,val]
console.log(user.hasOwnProperty('Soumik'));//Check wheather the value is available or not 
