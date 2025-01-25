// dates
let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

// let myCreate= new Date(2025,11,23)
// let myCreate= new Date(2025,11,23,12,35,44)
// let myCreate= new Date("2025/12/01")
let myCreate= new Date("01-01-2011")
console.log(myCreate.toLocaleString());

let myTime= Date.now()//gives o/p in miliseconds
console.log(myTime);

// convert into second
console.log(myTime/1000);//gives decimal val
console.log(Math.round(myTime/1000));

// console.log(myCreate.getDay());
