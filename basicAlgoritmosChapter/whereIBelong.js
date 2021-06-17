function getIndexToIns(arr, num) {
    arr.sort((a,b) => {
      return a === b ? 0:
      a > b ? 1:
      -1;
    });
    
    //la manera original con la que resolví esto fue bastante dudosilla :)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
  
    return arr.length;
  }
  getIndexToIns([10,20,30,40,50], 35);