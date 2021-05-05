function getIndexToIns(arr, num) {
  
  arr.sort((a,b) => a-b);
  let i= 0;
  while (num>arr[i]){
    i++

  }

console.log(i)  
 return i;
}

getIndexToIns([40,60],50);