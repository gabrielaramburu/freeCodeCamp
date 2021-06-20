function sumFibs(num) {
    let valuesArr = sumFibsRecursive(1, 1, num);
    console.log(valuesArr);
    let totalOdd = valuesArr.reduce((acum, item) => {
        if (isOdd(item)) {
            return acum += item;
        } else return acum;
    }, 0);

    console.log("result " + totalOdd);
    return totalOdd;
}

function sumFibsRecursive(total, newValue, num) {
    if (total > num) {
        let aux = [];
        return aux;
    }

    console.log(total + " " + newValue);
    let aux = total + newValue;
    let values = sumFibsRecursive(aux, aux + newValue, num);
    if (total <= num) {
        values.push(total);
    }
    if (newValue <= num) {
        values.push(newValue);
    }

    return values;
}

function isOdd(value) {
    return (value % 2 === 0) ? false : true;
}
sumFibs(75024);
sumFibs(75025);
sumFibs(4);
sumFibs(4000000);
sumFibs(1000);
sumFibs(1);