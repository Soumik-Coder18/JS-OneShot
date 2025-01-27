//
const myArr = [1,2,3,5,43,5,"Soumik",false]
console.log(myArr[7]);

const myNewArr = new Array(1,2,3,4)

console.log(myNewArr);

// Array Methods
myArr.push(4,3)//add element 
console.log(myArr);

myArr.pop() // dlt the last element no need to declare 
console.log(myArr);

myArr.unshift(90) // Insert at begining
console.log(myArr);
myArr.shift()// Delete from beg
myArr.shift()
console.log(myArr);

// More methods

console.log(myArr.includes(43));//wheather the element is there or not
console.log(myArr.indexOf(false));

const newArr= myArr.join()//convert the array into string
console.log(newArr);
console.log(typeof newArr);

// slice and splice 
const arr1 = myArr.slice(1,4)//don't change the original array at show frok 1 to 3 index
console.table([myArr,arr1])

const arr2 = myArr.splice(1,4)//change the original array , remove the item from 1 to 4 index
console.table([myArr,arr2])