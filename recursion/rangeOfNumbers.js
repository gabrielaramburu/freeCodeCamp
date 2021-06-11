function rangeOfNumbers(starNum, endNum){
    if (starNum === endNum){
        let firstItem = [];
        firstItem.push(endNum);
        return firstItem;
    }

    let arr = rangeOfNumbers(starNum, endNum - 1);
    arr.push(endNum);
    return arr;
}

console.log(rangeOfNumbers(5,10));

console.log(rangeOfNumbers(10,10));