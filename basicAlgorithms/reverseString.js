function reverseString(str) {
    let arr=[];
    for (let i=0;i<str.length;i++){
      arr.unshift(str[i]);
    }
    str=arr.join("");
    return str;
  }
  
  reverseString("hello");

  //recursive version, necesito otro parámetro, por lo tanto se ve claramente que la recursividad
  //no siempre es una alternativa valida para resolver problemas de iteración
  function reverseStringRecursive(str, strLength){
    if (strLength === 1) return str[0];

    let index = strLength -1;
    let reverseStr = str[index] + reverseStringRecursive(str, strLength - 1);
    return reverseStr;
  }

console.log("Result: " + reverseStringRecursive("HOLA", 4));
  