function repeatStringNumTimes(str, num) {
    if (num<=0) return "";
    str += repeatStringNumTimes(str,num-1);
    return str;
  }
  
  console.log(repeatStringNumTimes("abc", 3));