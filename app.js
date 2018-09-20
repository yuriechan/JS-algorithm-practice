//- how to create a server on any port you like 
//- run it 
//- routing 


//console.log("hello");
//function yurie (){
//    console.log("hello in func yurie")
//}
//console.log(yurie());
//function getEven(x){
//    evens = []
//    for(i = 0; i < x.length; i++){
//        if (x[i]%2==0)
//        {
//            //console.log(x[i])
//          evens.push(x[i]);
//            
//        } 
//
//    }
//    return  evens;
//    //return 0;
//    //console.log("asdasdasdsa")
//}

//write a function that prints the number backward
//evenArr = [1, 2, 3, 4, 5];
//
//function reverse(x) {
//  var y = [];
//  var helper = x.length - 1;
//  for (i = 0; i < x.length; i++) {
//    y[i] = x[helper];
//    helper--;
//  }
//
//  return y;
//}
//console.log(reverse(evenArr));

//write a function that duplicate(myArr)  --> 1 2 3 1 2 3
//myArr = [1, 2, 3];
//function duplicate(x){
//    var y = [];
//    var helper = 0;
//    for (i = 0; i < x.length; i++){
//        y[i] = x[helper];
//        helper++;
//    }
//    for (s = 0; s < x.length; s++){
//        y[helper] = x[s];
//        helper++;
//    }
//    
//    return y;
//}
//console.log(duplicate(myArr));

//write a function that duplicateReverse(myArr) --> 1 2 3 3 2 1
//myArr = [1,2,3];
//function duplicate (x){
//    var y = [];
//    var helper = 0;
//    var helper1 = x.length - 1;
//    for(i = 0;i<x.length;i++){
//        y[i] = x[helper];
//        helper++;
//        //console.log(y[i]);
//    }
//    for(s = 0;s<x.length;s++){
//        y[helper] = x[helper1];
//        helper++;
//        helper1--;
//       // console.log(y[helper-1]);
//    }
//    return y;
//}
////duplicate(myArr);

//console.log(duplicate(myArr));

//write a function that getEven(evenArr) --> 2 4 
//arr = [1, 2, 3, 4, 5,8,12,1231242135235238,1231241239];
//function arman(){
//    return 24;
//}
//
//function yurieEven(x){
//    var y = [];
//    for(i = 0;i < x.length;i++){
//       if(x[i]%12==0){
//           y.push(x[i]); 
//       } 
//    }
//    return y;
//}
//   
//   
//console.log(yurieEven(arr));
//name of the value
//function reverseString(str) {
//    // we want to save the original string
//    var tmp = str;
//  //  console.log(tmp,str)
//        str = "";
//    for (var i = tmp.length - 1; i >= 0;i--)
//    {
//    //console.log("asdasdasdasd")
//     str += tmp[i];
//    //str = str + tmp[i];
//        
//    }
//  return str;
//}
//
//console.log(reverseString([1,2,3,4,5]));

//function factorialize(num) {
//  var tmp;
//  if (num == 0){
//      return 1;
//  }
//  for (var i = num-1; i > 0; i--)
//  {
//      num = num*i
//  }
//  return num;
//}
//
//console.log(factorialize(0));

//function factorialize(num) 
//{
//    tmp = num;
//    num = num -1;
//  while(num>0)
//  {
//    tmp = tmp * num;
//      //tmp = tmp * (num - 1);
//     //20 = 5 * 4 
//     //60 = 20 * 3 
//    //120 = 60 * 2 
//    //120 = 120 * 1 
//      //0 = 120 * 0
//    num--;
//  }
//    return tmp;
//}
//
//console.log(factorialize(5));

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");




