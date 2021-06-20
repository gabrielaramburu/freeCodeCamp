function dropElements(arr, func) {
    let copyArr=[...arr];
  
    while (copyArr.length>0){
      if (!func(copyArr[0])) copyArr.splice(0,1);
      else break;
    }
    console.log(copyArr);  
  
    return copyArr;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});
  dropElements([1, 2, 3], function(n) {return n < 3; });
  dropElements([1, 2, 3, 4], function(n) {return n > 5;});
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) ;
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) ;