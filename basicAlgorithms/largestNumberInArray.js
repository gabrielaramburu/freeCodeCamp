function largestOfFour(arr) {
    let result=[];
    arr.forEach (element => {
      let maxNum = element
        .reduce((acum, item) => 
        {
          return item > acum ? item:acum;
        }); //muy importante no inicializar a 0 para que funcione con números negativos
    
        result.push(maxNum);
    }) 
    console.log(result);
    return result;
  }
  
  largestOfFour([[-72, -3, -17, -10],[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);