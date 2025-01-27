const frd1 = ["Soumik","Kousik","Sayan"]
const frd2 = ["Sneha","Snigdha","Sondesh"]
// {frd1.push(frd2)}//it will consider frd2 elements as a single element in frd1 array
// console.log(frd1);
// console.log(frd1[3][2]);//Way of searching 

const newFrd = frd1.concat(frd2)//convert into a single array
console.log(newFrd);

const newfrd1= [...frd1,...frd2,...newFrd]
console.log(newfrd1);//This also convert into single new array

const array1 = [1,2,[34,3],34,[3,4,[4,4,[5,23],7]],89]

const new_array1 = array1.flat(Infinity)//inside () must be the depth which should convert into simple form
console.log(array1);

console.log(new_array1);

//more methods

console.log(Array.isArray("Soumik"));//chechking wheather it is array or not 
console.log(Array.from("Soumik"));//convert this into array format
console.log(Array.from({name: "Sneha_Bag"}));//create a blank aray cause we don't mention how the partion must be done

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3,frd1,frd2));//combine all things in a single array
