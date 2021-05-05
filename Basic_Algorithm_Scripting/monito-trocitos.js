function chunkArrayInGroups(arr, size) {
let newArr = []; //newArray in 0
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size)); //i change to 2
    console.log(i + size)
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);