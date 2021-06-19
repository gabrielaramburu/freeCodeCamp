function destroyer(arr) {
    let initialArr = arguments[0];
    let extraValues = [];
    for (let i=1;i<arguments.length;i++){
      extraValues.push(arguments[i]);
    }
   
    let aux =initialArr.filter( item => {
      return extraValues.indexOf(item)===-1?true:false;
      }
    );
  
    return aux;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);