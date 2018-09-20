function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    var boolean = false;
    for (var i = 0; i < arr[1].length; i++)
        {
            for (var s = 0; s < arr[0].length; s++)
                {
                    
                    if (arr[1][i] == arr[0][s])
                        {
                            boolean = true;
                            continue;
                        }
                    
//                    if (arr[1][i] != arr[0][s])
//                        {
//                            boolean = false;
//                            //return boolean; 
//                        }
                     //console.log(boolean)                         
                }
                     //if (arr[1][i] != arr[0][s] || )
                     if (boolean == false)
                        {
                             return false;
                            //return boolean; 
                        }
             //console.log(boolean) ask from here!
            
        }
             if (boolean)
                {
                  return true;
                }
            //else return false;
          //return boolean;
}

//console.log(mutation(["hello", "neo"]));
//console.log(mutation(["voodoo", "no"]));
//console.log(mutation(["Hello", "hello"]));
//console.log(mutation(["hello", "hey"]));






function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    //var boolean = false;
    for (var i = 0; i < arr[1].length; i++)
        {
            var boolean = false;
            for (var s = 0; s < arr[0].length; s++)
                {
                    
                    if (arr[1][i] == arr[0][s])
                        {
                            boolean = true;
                            continue;
                        }
                    
//                    if (arr[1][i] != arr[0][s])
//                        {
//                            boolean = false;
//                            //return boolean; 
//                        }
                     //console.log(boolean)                         
                }
                     //if (arr[1][i] != arr[0][s] || )
                     if (boolean == false)
                        {
                             return false;
                            //return boolean; 
                        }
             //console.log(boolean) ask from here!
            
        }
                  return true;
            //else return false;
          //return boolean;
}

//console.log(mutation(["hello", "neo"]));
//console.log(mutation(["voodoo", "no"]));
//console.log(mutation(["Hello", "hello"]));
console.log(mutation(["hello", "he"]));