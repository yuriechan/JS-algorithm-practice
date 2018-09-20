//// calling another function as a parameter 
//// assign whatever calls true in func to num and return num
//function findElement(arr, func) {
//    let num;
//   num = boo(arr);
//    //console.log(num)
//   return num;
//    
//}
//
//
////check each element of the array
//function boo (myArray){
//    
//    for (i = 0; i < myArray.length; i++)
//    {
//        //console.log(myArray[i])
//       if ( myArray[i] % 2 === 0)
//           {
//               return myArray[i];
//               //console.log(num);
//           }
//       
//    }
//      return undefined;
//}
//console.log(findElement([61, 3,1,3,3,3,3,3,3,3], num => num % 2 === 0));


//var arr = [3,5,4];

//function calculator(numArr)
//{
//    //var tmp ;
//    for (i = 0; i < numArr.length; i++)
//        {
//            if (numArr[i]%2 === 0)
//                {
//                    //tmp = numArr[i];
//                    return numArr[i];
//                }
//
//        }
//            return undefined;
//    //return tmp;
//}
//
//
//function findElement(arr, func) {
//  //let num = 0;
//  return calculator(arr);
//  //return num;
//}
//
//
////console.log(calculator(arr));
////if you dont returned anything, it returns undefined
//console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

function arman(str){
    return str
}
function megu(str){
    var tmp = [];
    for(i=0;i<str.length;i++)
        {
            tmp.push(str[i]*2)
        }
    return tmp
}
function yurie(str){
    var tmp = []
       for(i=0;i<str.length;i++)
        {
            tmp.push(str[i])
        }
        for(i=0;i<str.length;i++)
        {
            tmp.push(str[i])
        }
    return tmp
}
//console.log(yurie([1,2,3]))
//possible answers include: ERROR, a returned array/string, undefined
//console.log(arman(megu()))
//undefined:ERROR

//console.log(yurie(megu(arman([1,2,3]))))
//0
//[2,4,6,2,4,6]

//console.log(arman(yurie("arman")))
//[a,r,m,a,n,a,r,m,a,n]
//[ 'a', 'r', 'm', 'a', 'n', 'a', 'r', 'm', 'a', 'n' ]

//console.log(yurie(megu("arman")))
//ERROR
//[ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]
//console.log(arman("megu([1,2,3,])"))
//[2,4,6]

console.log(arman(arman(arman(yurie(megu(megu([1,2,3])))))))
//[2,4,6] => [] => [2,4,6]
//[2,4,6,2,4,6]
//[2,4,6,2,4,6][2,4,6,2,4,6][2,4,6,2,4,6]
//[ 4, 8, 12, 4, 8, 12 ]

//console.log(findElement())
//





































