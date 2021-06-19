function pairElement(str) {
    let pair={
      A:"T",
      T:"A",
      C:"G",
      G:"C"
    };
  
    let completeADN=[];
    for (let char of str){
      completeADN.push([char, pair[char]]);
    };
    console.log(completeADN);
    return completeADN;
  }
  
  pairElement("GCG");
  pairElement("ATCGA");
  pairElement("TTGAG");
  pairElement("CTCTA");