function addTogether(var1) {
    if (arguments.length === 1) {
      if (typeof var1 !== 'number') return undefined;
      else return function add(value) {
         if (typeof value !== 'number') return undefined;
         else return value + var1;
      };
    } else {
  
       if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number'){
         return undefined;
       } else return arguments[0] + arguments[1];
       
    }
  } 
  
  addTogether(2, "3");
  addTogether("http://bit.ly/IqT6zt");
  addTogether(2,3);
  addTogether(5)(7);