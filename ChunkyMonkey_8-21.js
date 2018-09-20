function chunkArrayInGroups(arr, size) {
    var tmpArr = [];
  for (var i = 0; i < arr.length; i = i + size)
      {
          tmpArr.push(arr.slice(i,i + size));
      }
    return tmpArr;
  //return arr;
}

chunkArrayInGroups(["a", "b", "c", "d","f"], 2);