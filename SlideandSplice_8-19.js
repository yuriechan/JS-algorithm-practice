////slice: Array.slice(val1,val2)|(start index num,not include index num)
//let arr = [1,2,3,4,5,6]
//let arr1 = arr.slice(0,2);
////prints [1,2]
//let arr2 = arr.slice(2,3);
////prints [3]
//let arr3 = arr.slice(4);
////prints [5,6]

////splice: delete 
//let arr = [1,2,3,4,5,6]
////let arr1 = arr.splice(2,2)
//////prints [3,4] was deleted
////// modified arr = [1,2,5,6]
////let arr2 = arr.splice(4) 
//////prints [5,6] if arr is original array
//let arr3 = arr.splice(2,0, "a","b")
//console.log(arr);
//arr3 = [];
//arr = [1,2,"a","b",3,4,5,6]
//let arr4 = arr.splice(2,1, "a","b");
////prints [3]
//// arr prints [1,2,"a","b",4,5,6]


function frankenSplice(arr1, arr2, n) {
//  var tmpArr1 = [];
//  var tmpArr2 = [];
//    tmpArr2 = arr2.slice(arr2[n+1],arr2[arr2.length])
//    console.log(tmpArr2)
//    console.log(arr2)
    tmpArr=arr1.slice(0,arr1.length)
    
        arr2.splice(n,0,...tmpArr);
       
    
    
//  for (i = 0;i <= n;i++)
//      {
//          if (arr2[i] = arr2[n])
//              {
//                  tmpArr2 = arr2.slice(n,)
//              }
//      }
  return arr2;
}

//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//myarr=[1, 2, 3]
//tmpArr = []
//tmpArr=myarr.splice(0,myarr.length)
//console.log(tmpArr)

































function frankenSplice(arr1, arr2, n) {
    var tmpArr = [];
    //var tmpSlice = [];
  for (var i = 0; i < arr2.length; i++)
      {
          if (i != n)
              {
                   tmpArr.push(arr2[i])
              }
          if (i == n)
              {
                  tmpArr.splice(n,0,...arr1)
                  break;
              }
      }
    
    tmpArr.push(...arr2.slice(n,arr2.length))
    //tmpArr.push(...arr2.slice(n,arr2.length - 1))  why? because slice method 
    //console.log(tmpArr)
  return tmpArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
//console.log(frankenSplice([1, 2, 3], [4, 5], 1))













