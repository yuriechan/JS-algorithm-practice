//function repeatStringNumTimes(str, num) {
//    tmp = str;
//    str = "";
//    for (var i = 0; i < num; i++)
//        {
//            str += tmp;
//        }
//  return str;
//}
//
//console.log(repeatStringNumTimes("yurie", 3));































function repeatStringNumTimes(str, num) {
    var tmp = "";
  for (i = num; i>=1; i--)
      {
          tmp += str;
      }
  str = tmp;
  return str;
}
console.log(repeatStringNumTimes("abc", 3));
















