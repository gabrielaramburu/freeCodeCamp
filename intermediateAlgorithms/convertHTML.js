function convertHTML(str) {
    let regExps = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"":"&quot;",
      "'":"&apos;"
    }
    let result = str;
    for (let prop in regExps) {
      let regExp = new RegExp(prop, "g");
      result = result.replace(regExp,regExps[prop]);
    }
    
  
    console.log(result);
    return result;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos");
  convertHTML("Sixty > twelve");
  convertHTML('Stuff in "quotation marks"');
  convertHTML("Schindler's List");
  convertHTML("abc");