////function reverseString(str) {
////  tmp = str;
////  str = "";
////  for (i = tmp.length - 1; i >= 0; i--)
////      {
////          str += tmp[i];
////      }
////    
////  return str;
////}
////
////console.log(reverseString("hello"));
//
//
//
//
//
//
//
//
//
//
//
//
function mutation(arr) {
    mybool = false;
  for(var i =0; i< arr[1].length; i++)
  {
    for(var j = 0; j<arr[0].length; j++)
    {
      if(arr[1][i].toLowerCase() == arr[0][j].toLowerCase())
      {
          mybool = true;
          console.log(arr[1][i])
            break;
      }
        else
        {
            mybool = false
            
        }

        //return false;
     
    }
              if(!mybool){
            return mybool
        }
     
      // return false;
    //return false;
  }
  return mybool;
}

console.log(mutation(["hello", "Hello"]));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
