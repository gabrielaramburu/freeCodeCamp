const squareList = arr => {
  
    let squaresArr = arr.filter(num => 
      {if ( num>0 && (Math.floor(num)===num)) return num});
  
    return squaresArr.map(num => {
      return num*num;
    });
   
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);