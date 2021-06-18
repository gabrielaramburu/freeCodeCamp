function chunkArrayInGroups(arr, size) {
    let result=[];
  
    while (arr.length > 0) {
      let aux = arr.splice(0,size);
      result.push(aux);
    }
    
    console.log(result);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);