//
//function titleCase(str) {
//    var tmp = str;
//    str = "";
//   
//    arr = parseStr(str);
//    //console.log(arr);
//    for (var s = 0; s < arr.length; s++)
//        {
//            str += arr[s][0].toUpperCase;
//            //loop the numer of character in the string, not the length of array
//            for (var t = 0; t < arr.length; t++)
//                {
//                    str += arr[s][t].toLowerCase;
//                }
//        }
//  return str;
//}
//
//function parseStr(str){
//    var tmp = "";
//    
//    var words = [];
//    for (var i = 0; i < str.length; i++)
//        {
//            if (str[i] != " " || i == str.length-1)
//                {
//                    tmp += str[i];
//                    if( i == str.length-1){
//                        words.push(tmp)
//                    }
//                        
//                }
//            else{
//            
//            words.push(tmp)
//            tmp = "";
//            }
//        
//
//        }
//    
//    
//    return words;
//    
//}
//console.log(parseStr("I'm a little tea pot"))
////console.log(parseStr("I'm a little tea pot"))
//
////titleCase("I'm a little tea pot");




//
//function titleCase(str) {
//  var tmp = "";
//    for (i = 0; i < str.length; i++)
//        {   
//            if(i == 0){
//               tmp += str[i].toUpperCase()
//                
//               
//            }
//            else if(str[i] != " " && str[i-1] == " "){
//                tmp += str[i].toUpperCase()
//            }
//            else{
//                if(str[i] == " "){
//                    tmp += str[i]
//                }
//                else if(str[i] != " ")
//                    tmp += str[i].toLowerCase()
//            }
//            
//        }  
//  return tmp;
//}
//
//console.log(titleCase("    i'm a little tea pot"));



function titleCase(str) {
    //console.log(str.split(' ').join(','))
    tmpNew = "";
    tmpArr = [];
    tmpWord = "";
    arrIndexNum = 0;
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++)
        {
            if (str[i] == " ")
                {
                    continue;
                }
            if (str[i] != " ") 
               {
                   tmpWord += str[i];
                   //console.log(tmpWord)
                   if (str[i+1] == " " || i == str.length - 1)
                        //if (str[i+1] == " " || str[str.length - 1]) why?
                       {
                            tmpArr[arrIndexNum] = tmpWord;
                           //tmpArr[arrIndexNum].push(tmpWord) why?
                            arrIndexNum = arrIndexNum + 1;
                            tmpWord = "";
                       }
               }
            
            //console.log(tmpArr)
            //tmpWord = "";
        }
    //console.log(tmpWord)
    //console.log(tmpArr)
    for (var t = 0; t < tmpArr.length; t++)
        {
             if (tmpArr[t][0])
                     {
                     tmpNew += tmpArr[t][0].toUpperCase();
                     } 
    
            for (var p = 1; p < tmpArr[t].length; p++)
                {
                      tmpNew += tmpArr[t][p];
                }
            tmpNew += " ";
        }
    return tmpNew;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
//console.log(titleCase("   asdweoi I'm a pot"));
//['im','a','little']

//I'm A Pot
//Apple Eat










//
//function myPush(arr,value){
//    arr.push(value);
//    return arr;
//}
//myArr = [1,2,3]
//// use myPush() to add '4' into arr
//
//myPush(myArr,4);
//
//console.log (myPush(myArr,4));





function Person(name)






















