//function truncateString(str, num) {
//  var tmp = str;
//  str = "";
//    if (num > tmp.length)
//        {
//            num = tmp.length;
//        }
//    for (i = 0 ; i < num ; i++)
//        {
//            str += tmp[i]; 
//        }
//    //console.log(str);
//    if (tmp.length > num)
//        {
//            str += "...";
//        }
//  return str;
//}
//
////console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yello000000000000000000000".length));


































function truncateString(str, num) {
  var tmp = "";
    for (i = 0; i < num;i++)
        {      
                   tmp += str[i];
        }
     if (num != str.length)
        {
                   tmp += "..."
        }
     if (num > str.length)
         {
             return str;
         }
  str = tmp;
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 100));

//console.log(truncateString("basket", 3));












