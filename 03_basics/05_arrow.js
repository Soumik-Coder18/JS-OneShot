const user={
    userName: "Soumik",
    age : 18,
    welcomeMsg : function(){
        console.log(`${this.userName}, welcome to our website`);
        console.log(this);
    }
}
user.welcomeMsg()
user.userName= "Sneha"
user.welcomeMsg()

console.log(this);//There are no global elements so it will show null 

function chai(){
    userName: "Soumik"
    console.log(this);
    console.log(this.userName);//This will show undefined cause this can be used in object not in function
}
chai()
// Arrow function
const goal = ()=>{
    userName:'Soumik'
    console.log(this.userName);
    console.log(this);//In arrow function onely this will also show empty {}
    
}
goal()

const addTwo= (num1,num2)=>{
    return num1+num2
}
console.log(`Sum: `,addTwo(5,34))

// Without return
const addThree = (num1,num2,num3)=> (num1+num2+num3)
console.log(addThree(2,4,8));
