function factorial(fact){
    if (fact===1) return 1;

    let result = factorial(fact - 1);
    result*=fact;
    return result;
}

console.log(factorial(6));

//other way
function factorialize(num) {  
    if (num<=1) {
      return 1;
    } 
  
    let fact = num * factorialize(num-1) ;
    return fact;
  }