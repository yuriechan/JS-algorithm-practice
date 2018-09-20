//function findLongestWordLength(str) {
//    var words = [];
//    var tmp = "";
//    // we have an array of words
//    for (i = 0; i<str.length; i++)
//        {
//            
//            if (str[i] != " ")
//                {
//                    //console.log(str[i])
//                    tmp += str[i];
//                    
//                }
//        
//             if (str[i] == " " || i==str.length-1)
//                {
//                  
//                    words.push(tmp);
//                    tmp = "";
//                }
//        }
//    //console.log(words)
//    var max = 0;
//    var maxWord = "";
//    for (i = 0; i<words.length; i++)
//        {
//            if(words[i].length > max){
//                max = words[i].length ;
//                maxWord = words[i];
//                console.log(maxWord.length)
//            }
//        }
//    
//    str = maxWord;
//    
//  return str.length;
//}
//
//console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

//
//function findLongestWordLength(str) {
//    //separate in each word to measure the length of the string
//  wordArr = []; 
//    //tmp to store string of character before dividing into words 
//  var tmp = "";
//    //assign each word in to wordArr by the number of words in the sentence
//  for (i = 0; i < str.length; i++)
//      {
//          if (str[i] != " ")
//              {
//                 
//                  tmp += str[i];
//                
//              }
//          if (str[i] == " " || i == str.length - 1)
//              {
//                  wordArr.push(tmp);
//                  tmp = "";
//              }
//      }
//    //count each word length and assign the biggest number
//    var max = 0;
//    var maxword = ""
//    for (t = 0; t < wordArr.length; t++)
//        {
//            if (max < wordArr[t].length)
//            {
//                max = wordArr[t].length
//                maxword = wordArr[t];
//            }  
//        }
//    str = maxword;
//  return str.length;
//}
//
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
////console.log(findLongestWordLength("the lazy dog"))




function findLongestWordLength(str) {
    var tmp = "";
    var tmpArr = [];
    var maxNum = 0;
    for (var i = 0; i < str.length; i++)
        {
            if (str[i] != " ")
                {
                     tmp += str[i];
                }
            if (str[i + 1] == " " || i == str.length - 1)
                {
                   tmpArr.push(tmp);
                   tmp = "";
                }
        }
    //console.log(tmpArr)
    for (var s = 0; s < tmpArr.length; s++)
        {
            if (tmpArr[s].length > maxNum)
                {
                    maxNum = tmpArr[s].length;
                }
        }
  return maxNum;
}

//findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("     he lazy dog"));






































































































