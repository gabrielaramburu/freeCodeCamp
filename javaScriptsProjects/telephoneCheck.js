function telephoneCheck(str) {
    let regExpArr=[];
    regExpArr.push(
    new RegExp("^\\d\\d\\d[-|\\s]\\d\\d\\d[-|\\s]\\d\\d\\d\\d"));
  
    regExpArr.push(
    new RegExp("^\\(\\d\\d\\d\\)\\s*\\d\\d\\d-\\d\\d\\d\\d"));
  
    regExpArr.push(
    new RegExp("^1\\s\\d\\d\\d[\\s|-]\\d\\d\\d[\\s|-]\\d\\d\\d\\d"));
  
    regExpArr.push(
    new RegExp("^1\\s*\\(\\d\\d\\d\\)\\\s*\\d\\d\\d-\\d\\d\\d\\d"));
    
    regExpArr.push(new RegExp("^\\d{10}$"));
  
  
    let result = regExpArr.some(regExp=>{
      console.log(regExp);
      return regExp.test(str);
    });
    console.log(result);
    return result;
  }
  /*
  telephoneCheck("1 555-555-5555");
  telephoneCheck("555-555-5555");
  telephoneCheck("555 555 5555");
  telephoneCheck("(555)555-5555");
  telephoneCheck("1 (555) 555-5555");
  telephoneCheck("5555555555");
  telephoneCheck("1(555)555-5555");
  telephoneCheck("1 555 555 5555"); 
  telephoneCheck("1 456 789 4444");
  */
  console.log("it must return false");
  telephoneCheck("27576227382");
  telephoneCheck("(6054756961)");
  telephoneCheck("55 55-55-555-5");
  telephoneCheck("(555)5(55?)-5555");
  telephoneCheck("(555-555-5555");
  telephoneCheck("555)-555-5555");
  telephoneCheck("2(757)6227382");
  telephoneCheck("(275)76227382");
  telephoneCheck("10 (757) 622-7382");
  
  telephoneCheck("2(757)622-7382");
  telephoneCheck("0 (757) 622-7382");
  telephoneCheck("2 757 622-7382");
  telephoneCheck("2(757)622-7382");
  