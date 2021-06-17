function titleCase(str) {
    let lowerCase = str.toLowerCase();
    let arrWords = lowerCase.split(" ");
  
    let arrOfWordUpper = arrWords.map(word =>{
       
      let result;
      let aux = "";
      for (let i=0;i<word.length;i++){
        if (i === 0) {
          aux = word[0].toUpperCase();
        } else {
          aux += word[i];
        }
      } 
      return aux;
    });
  
    str = arrOfWordUpper.join(" ");
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));