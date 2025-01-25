const name = "Soumik"
const age = 20

// console.log(name +age + " Good Boy !!");//Backdated 

console.log(`Hello my name is ${name } and my age is ${age}`);

const myName = new String("Soumik")

console.log(myName.length);//length can be showed

console.log(myName.toUpperCase());

console.log(myName.charAt(2));//2 is position
console.log(myName.indexOf("o"));//o in which index

const newString = myName.substring(0,2)//0 to 1 
console.log(newString);

const anotherString = myName.slice(-8,3)//from backward

console.log(anotherString);

const mail = " soumik@gmail.com   "
console.log(mail);
console.log(mail.trim());//Remove the blank space from front and back 

const url ="https://soumik.com%20bag"
console.log(url.replace("%20","_"));//firt space which I want to replace and second place is replaced thing

console.log(url.includes("soumik"));//check wheather it is there or not => true/false

const gameName = "soumik-bag-20-01-10-2004"
console.log(gameName.split("-"));//split according to "-"



