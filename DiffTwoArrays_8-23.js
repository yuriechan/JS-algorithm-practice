function diffArray(arr1, arr2) {
  //var allArr = arr2;
    sortArr = arr1;
    diffArr1 = [];
    diffArr2 = [];
    for (var i = 0; i < arr2.length; i++)
        {
            if (!arr1.includes(arr2[i]))
                {
                    sortArr.push(arr2[i])
                }
            if (arr1.includes(arr2[i])) 
            {
                continue;
            }
            
        }
    //console.log(sortArr)
    for (var s = 0; s < arr1.length; s++)
        {
            if(!sortArr.includes(arr1[s]))
                {
                    diffArr1.push(arr1[s]);
                }
            if (sortArr.includes(arr1[s]))
                {
                    continue;
                }
            //console.log(diffArr1) why is this empty?
        }
    console.log(diffArr1)
    for (var t = 0; t < arr2.length; t++)
        {
            if (!sortArr.includes(arr2[t]))
                {
                    diffArr2.push(arr2[t]);
                }
            if (sortArr.includes(arr2[t]))
                {
                    continue;
                }
        }
    //console.log(diffArr2)
    
    //console.log(allArr); 
//  for (var i = 0; i < arr1.length; i++)
//      {
//          for (var s = 0; s < arr2.length; s++)
//              {
//                  if (arr1[i] == arr2[s])
//                      {
//                          break;
//                      }
//                  if (arr1[i] != arr2[s])
//                      {
//                        allArr.push(arr1[i]);
//                         break;
//                      }
//                  //console.log(allArr); 
//              }
//          console.log(allArr); 
//      }
   
  //return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2], [1, 5, 2, 7]);