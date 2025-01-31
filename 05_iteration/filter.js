// const code= ["JS","C++","Java","C#"]
// const val = code.forEach(function(item){
//     // console.log(item);
//     return item
// })
// console.log(val); //It doesn't return any value 

// filter ((key)=> condition) //Give callback value

const arr= [1,2,3,4,5,6,7,8,9,10]
// let value =arr.filter((key)=>key>5)
// console.log(value);

arr.forEach((num)=>{
    if(num>4)
        arr.push(num)
})
console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const user= books.filter((key)=>key.genre==="Fiction")
  console.log(user);
  const usertime= books.filter((key)=>key.publish>=2000)
  console.log(usertime);
  