function convertToRoman(num) {
    let romanUnit = ["I", "II","III","IV","V","VI","VII","VIII","IX"];
    let romanDec =["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    let romanCent=["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let romanMil=["M","MM","MMM"];
  
    let numStr=("0000"+num).slice(-4);
    
    let romanNumber =[];
    romanNumber.push(numStr[0]===0?"":romanMil[numStr[0]-1]);
    romanNumber.push(numStr[1]===0?"":romanCent[numStr[1]-1]);
    romanNumber.push(numStr[2]===0?"":romanDec[numStr[2]-1]);
    romanNumber.push(numStr[3]===0?"":romanUnit[numStr[3]-1]);
  
  let result=romanNumber.join("")
   console.log(result);
   return result;
  }
  
  convertToRoman(2);
  convertToRoman(12);
  convertToRoman(16);
  convertToRoman(44);
  convertToRoman(400);
  convertToRoman(798);
  convertToRoman(3999) ;