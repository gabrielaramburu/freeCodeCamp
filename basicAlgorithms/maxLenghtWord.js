function findLongestWordLength(str) {
    let arr = str.split(" ");
    
    str = arr.reduce((acum, item) =>{
      return item.length > acum.length ?
      item: acum;
    },"");
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");