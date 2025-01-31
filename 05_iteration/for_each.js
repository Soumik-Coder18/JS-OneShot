const code= ["JS","C++","Java","C#"]
code.forEach(function(item){
    console.log(item);
    
})
// arrow
code.forEach((val)=>{
    console.log(val);
})

function print(value){
    console.log(value);
    
}
code.forEach(print)

code.forEach((key,index,arr)=>{
    console.log(key,index,arr);
    
})

const myLove=[
    {
        name: "soumik",
        color: "red",
    },
    {
        name: "Sneha",
        color: "Blue",
    },
    {
        name: "piglu",
        color: "Yellow",
    }
]
myLove.forEach((key)=>{
    console.log(key);
    console.log(key.color);
    
})