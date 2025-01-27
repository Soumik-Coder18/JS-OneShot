// Object Destructuring and JSON API
const Sneha ={
    bf : "Soumik",
    height : 5.5,
    surname: "Bag",
}

// Sneha.surname // Simple way to representation 
const {surname} = Sneha;//Destructuring
console.log(surname);

const {bf: boyfriend} = Sneha //We can change key name here also 
console.log(boyfriend);

// API 
// {
//     "name": "Soumik",
//     "age": 18,
//     "gf" : "Sneha",
// }

// [
//     {},
//     {},
//     {}
// ]