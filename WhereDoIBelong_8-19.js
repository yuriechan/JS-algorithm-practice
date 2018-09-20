//function getIndexToIns(arr, num) {
//  // Find my place in this sorted array.
//  //sort the arr from lowest num to highest num
//  //compare num to each element of the arr and find its appropriate index
//  //
//arr.sort(function(a, b){return a-b});
//
//  for (i = 0; i < arr.length; i++)
//  {
//     if (num <= arr[i])
//         {
//             return i;             
//         }
//  }
//  
//  //return num;
//}
//
//console.log(getIndexToIns([40, 60], 50));



//function getIndexToIns(arr, num) {
//  // Find my place in this sorted array.
//  //sort the arr from lowest num to highest num
//  //compare num to each element of the arr and find its appropriate index
//  //
//arr.sort(function(a, b){return a-b});
//
//  for (var i = 0; i <= arr.length-1; i++)
//  {
//     if (arr[i] >= num)
//         {
//             return i;             
//         }
//  }
//
//
//
//
//
//
//  
//  return arr.length;
//}
//
//
//getIndexToIns([40, 60,4,6], 50);



function getIndexToIns(arr, num) {
    var tmpArr = [];
    var tmpInsert = [];
    //how to sort array without using method?
    tmpArr = arr.sort(function(a, b){return a - b});
    //console.log(tmpArr)
    if (tmpArr.length < 0 || tmpArr.length == 0)
        {
           return 0; 
        }
    for (var i = 0; i < tmpArr.length; i++)
        {
//            if (tmpArr[i] === " ")
//                {
//                    
//                }
            if (tmpArr[i] < num)
            {
                tmpInsert.push(tmpArr[i]) 
                //tmpInsert += tmpArr[i]
                 if (num > tmpArr[tmpArr.length - 1])
                {
                    return tmpArr.length;
                }
            }
             else
             {
                 //tmpInsert += tmpArr[i]
                 tmpInsert.push(num)
                 //console.log(tmpInsert)
                 break;
             }
        }
    //console.log(tmpInsert)
  return tmpInsert.length - 1;
}

//getIndexToIns([40, 60], 50);
//console.log(getIndexToIns([40,45,55,60,35], 50));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
//console.log(getIndexToIns([2, 5, 10], 15))
console.log(getIndexToIns([], 1))














































