// restOperator
function addCartPrice(num){
    return num//Only one value return
}
console.log(addCartPrice(299,388,383,33));

// updated
function addCartPrice1(...num1){//restOperator
    return num1;
}
console.log(addCartPrice1(299,388,383,33));

// Special
function addCartPrice2(val1,val2,...num1){//restOperator
    return num1;
}
console.log(addCartPrice2(299,388,383,33));//Only print 383,33