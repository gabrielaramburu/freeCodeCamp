function factorial(fact){
    if (fact===1) return 1;

    let result = factorial(fact - 1);
    result*=fact;
    return result;
}

console.log(factorial(6));