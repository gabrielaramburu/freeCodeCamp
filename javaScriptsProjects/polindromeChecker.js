function palindrome(str) {
    let regExp = new RegExp("\\s|_|\\W","g");
    let clearText = str.replace(regExp,"");
    console.log(clearText);
  
    let fortmatedTex = clearText.toLowerCase();
   
    let result=true;
    for (let i=0;i<fortmatedTex.length;i++){
      if (fortmatedTex[i] !== fortmatedTex[fortmatedTex.length-1-i]){
        result=false;
        break;
      } 
    }
    console.log(result);
    return result;
  }
  
  
  
  palindrome("eye");
  palindrome("_eye");
  palindrome("race car");
  palindrome("not a palindrome");
  palindrome("A man, a plan, a canal. Panama");
  palindrome("never odd or even");
  palindrome("almostomla");
  palindrome("My age is 0, 0 si ega ym.");
  palindrome("0_0 (: /-\ :) 0-0") ;
  palindrome("five|\_/|four");
  
