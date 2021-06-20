function translatePigLatin(str) {  
    let result ;
    let startWithConsonatRegExp = /(^[^aeiou]+)/g;
  
    if (startWithConsonatRegExp.test(str)) {
      let consonantGroup = str.match(startWithConsonatRegExp);
      result = str.replace(startWithConsonatRegExp, "").concat(consonantGroup).concat("ay");
    } else {
        result= str+"way";
    }
  
    console.log(result);
    return result;
  }
  
  translatePigLatin("consonant");
  translatePigLatin("california");
  translatePigLatin("glove");
  translatePigLatin("algorithm");
  translatePigLatin("eight");
  translatePigLatin("schwartz");
  
  