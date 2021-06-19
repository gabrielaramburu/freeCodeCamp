function spinalCase(str) {
 
    let regExp = /([A-Z][a-z]+)|([a-z]+)/g;
    let words = str.match(regExp);
  
    let result = words.join("-").toLowerCase();
    
    console.log(result);
    return result;
  }
  

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");