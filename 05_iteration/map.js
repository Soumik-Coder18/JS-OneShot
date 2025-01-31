const myName= ["Soumik","Akash","Maharaj","Babu"]
const newName = myName.map((key)=> key+" Bag")
console.log(newName);


const number= [1,2,3,4,5,6,7,8,9,10]

const newnum = number
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>40)

console.log(newnum);

