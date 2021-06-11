function countDown(startNumber){
    if (startNumber===0){
        console.log(startNumber);
        return 0;
    }

    console.log(startNumber);
    countDown(startNumber - 1);
}

function countDownWhithArray(starNumber){
    if (starNumber ===  0){
        return [0];
    }

    const arr = countDownWhithArray(starNumber - 1);
    arr.unshift(starNumber);
    return arr;
}


//countDown(10);
console.log(countDownWhithArray(10));
