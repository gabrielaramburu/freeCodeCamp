function sumPrimes(num) {
    let tot=0;
    for (let i=2;i<=num;i++) {
      if (isPrime(i)){
        console.log(i);
        tot+=i;
      }
    }
    console.log(tot);
    return tot;
  }
  
  function isPrime(num){
    if (num === 2 ) return true;
  
    for (let i=2;i<num;i++){
      if (num % i === 0 ){
       return false;
      }
    } 
    return true;
  }
  sumPrimes(10);
  sumPrimes(977);