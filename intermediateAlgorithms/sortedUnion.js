function uniteUnique(arr) {
    let sprededArr=[];
    let finalArr=[];
    
    Array.from(arguments)
    .forEach(itemArr => {
      sprededArr.push(...itemArr);
    });
      
    sprededArr.forEach(item =>{
       if (finalArr.indexOf(item)===-1) finalArr.push(item);
    });
  
    console.log(finalArr);
    return finalArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);