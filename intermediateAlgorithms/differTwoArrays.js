function diffArray(arr1, arr2) {
    var newArr = [];
    newArr.push(...arr1.filter(item =>{
      return arr2.indexOf(item) === -1?true:false;
    }));
  
     newArr.push(...arr2.filter(item =>{
      return arr1.indexOf(item) === -1?true:false;
    }));
  
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //Esta es la version declarativa correcta
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }