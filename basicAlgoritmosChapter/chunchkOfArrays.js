function chunkArrayInGroups(arr, size) {
    let result=[];
  
    while (arr.length >= size) {
      let aux = arr.splice(0,size);
      result.push(aux);
    }
  
    if (arr.length >0)
      result.push(arr.splice(0,arr.length));
      
    console.log(result);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);