function titleCase(str) {
 //Change to lower Case and divide with split
 var convertToArray = str.toLowerCase().split(" ");
 //set result with map converting and setting the callBack and the currentValue
 var result = convertToArray.map(function(val){
   //remplace the first leter to currentValue to uper case 
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())});
    //return the array united
  return result.join(" ");
}

titleCase("I'm a little tea pot");