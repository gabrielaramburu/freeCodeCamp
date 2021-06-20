function myReplace(str, before, after) {
    let firtLetterUp = /^[A-Z]\w*/g;
  
    let firstChar;
    if (firtLetterUp.test(before)) firstChar=after[0].toUpperCase();
    else firstChar=after[0].toLowerCase();
    
    after=firstChar.concat(after.slice(1));
    str = str.replace(before, after);
    console.log(str);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");  