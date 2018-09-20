function sumAll(arr) {
    maxNum = Math.max(...arr);
    minNum = Math.min(...arr);
    tmpArr = [];
    total = "";
    //const reducer = (accumulator, currentValue);
    for (var i = maxNum; i >= minNum; i--)
        {
            tmpArr.push(i);
            //console.log(tmpArr)
        }
    //const sum = ...tmpArr.reduce(add);
  //return tmpArr.reduce(reducer);
    for (var i = 0; i < tmpArr.length; i++)
        {
           total += tmpArr[i];
             console.log(total)
        }
  
}

sumAll([1, 4]);

const sumA = () => {
        
    
}

var 
let
const