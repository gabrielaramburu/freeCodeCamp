function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let min=arr[0];
    let max = arr[1];

    let result=min;
    for (let i=min;i<max;i++){
        result= lcm(result, i+1);
        console.log(result);
    }
    
    return result;
  }
  
  function gcd(a,b){
      if (b == 0) return a;
      return gcd(b , (a % b));
  }

  function lcm (a,b){
      return (a*b)/gcd(a,b);
  }
 
  smallestCommons([2,10]); //2520
  smallestCommons([1,13]); //360360
  smallestCommons([23, 18]) //should return 6056820.
