//function confirmEnding(str, target) {
//  var s = str.length - 1;
//  for (i = target.length - 1; 0 <= i; i--)
//      {
//        
//          if (target[i] == str[s])
//              {
//                  s=s-1;
//              }
//          else 
//          {
//              return false;
//          }
//      }
//    
//  return true;
//}
//
//console.log(confirmEnding("Bastian", "tian"));


//
//function confirmEnding(str, target) {
//  // check char of target until the end 
//    // keep on cheking if char is identical
//    // if not return false
//    var s = str.length - 1;
//    for( i = target.length - 1; i>=0; i--)
//        {
//            if (target[i] == str[s])
//                {
//                     s = s - 1;
//                }
//            else
//            //if (target[i] != str[s]) why does not this work?
//                {
//                    return false;
//                }
//            
//        }
//  return true;
//}
//
//console.log(confirmEnding("Bastian", "tian"));


function confirmEnding(str,target){
var indexNum = str.length - 1;
    str = str.toLowerCase();
    target = target.toLowerCase();   
      for (var i = target.length - 1; i >= 0; i--)
          {
             if (target [i] == " ")
                 {
                     continue;
                 }
              if (str[indexNum] == " ")
                  {
                      indexNum = indexNum - 1;
                  }
             if (target[i] == str[indexNum])
                 {
                     indexNum = indexNum - 1;
                 }
              else 
              {
                return false   
              }
          }
    
    return true;
}

console.log(confirmEnding("Ba   sti  an   ", "to   an   "));








































































