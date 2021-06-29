function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let min=arr[0];
    let max = arr[1];
    let notFoundResult=true;
    let cont=1;
    while(notFoundResult){
        min*=cont;
        max*=cont;
        
    }
    for (let i=min;i<=max;i++){
      console.log(i);
      let scm = obtener();
      if ()
    }
    
    return arr;
  }
  
  
  smallestCommons([1,5]);