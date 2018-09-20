
function myPush(arr,value){
    arr.push(value);
    return arr;
}
myArr = [1,2,3];
tmpArr=[];
tmpArr = myPush(tmpArr,4)
myPush(myArr,tmpArr);
console.log(myPush(myPush(myArr,tmpArr),55))
console.log(myArr)
// use myPush() to add '4' into arr
//console.log(tmpArr)

// myPush(myArr,4);
    
// console.log (myPush(myArr,4));