//function largestOfFour(arr) {
//  var tmp = arr;
//  arr = [];
//  
//    for (i = 0; i < tmp.length; i++)
//        {
//            var largeNum = tmp[i][0];
//            for (s = 1; s < tmp[i].length; s++)
//                {
//                    if (tmp[i][s] >= largeNum)
//                        {
//                            largeNum = tmp[i][s];
//                        }
//                }
//           
//            arr.push(largeNum);
//            largeNum = 0;
//        }
//  return arr;
//}
//
////console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//
////largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
//console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));


function largestOfFour(arr) {
//check every element in each array
//assign large element of each array in tmp array
var max = "";
//assign the tmp array in arr
var maxArr = [];
    
    for (i = 0; i < arr.length;i++)
        {
            max = arr[i][0];
            for (s = 0; s < arr[i].length; s++)
                {
                    if (arr[i][s] > max)
                        {
                            max = arr[i][s];
                        }
                }
            maxArr.push(max);
        }
  arr = maxArr;
  return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-1000, -1001, -857, -1]]))
































