function sumAll(arr) {
    let min, max, tot=0;
    arr.sort((a,b)=>{return a-b});
  
    for (let currentValue= arr[0];currentValue<=arr[1]; currentValue++){
      tot+=currentValue;
    }
    console.log(tot);
    return tot;
  }
  
  sumAll([1, 4]);