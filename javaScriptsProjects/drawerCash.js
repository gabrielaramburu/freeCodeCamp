function checkCashRegister(price, cash, cid) {

  let diff = cash - price;

  let cashTotalizer = initialFounds(cid);

  let change = calculateChange(diff, cashTotalizer);

  let statusInfo = status(diff, change, cashTotalizer);

  console.log(statusInfo);
  return statusInfo;
}

function calculateChange(amount, cashRegTotalizer) {

  if (amount === 0) return [];

  let moneyIdx = 0;
  let referenceValue, availableCashPerValue;
  for (; moneyIdx < cashRegTotalizer.length; moneyIdx++) {
    referenceValue = cashRegTotalizer[moneyIdx][1];
    availableCashPerValue = cashRegTotalizer[moneyIdx][2];
    if (amount >= referenceValue && availableCashPerValue > 0) break;
  }

  if (moneyIdx > 8) return [];

  let valueToDecrement = referenceValue;
  let roundedTotal = (amount - valueToDecrement).toFixed(2);

  cashRegTotalizer[moneyIdx][2] = (availableCashPerValue - valueToDecrement).toFixed(2);
  let values = calculateChange(roundedTotal, cashRegTotalizer);
  values.unshift(cashRegTotalizer[moneyIdx]);
  return values;
}

function initialFounds(cid) {

  let definition = [
    ["ONE HUNDRED", 100, cid[8][1]],
    ["TWENTY", 20, cid[7][1]],
    ["TEN", 10, cid[6][1]],
    ["FIVE", 5, cid[5][1]],
    ["ONE", 1, cid[4][1]],
    ["QUARTER", 0.25, cid[3][1]],
    ["DIME", 0.1, cid[2][1]],
    ["NICKEL", 0.05, cid[1][1]],
    ["PENNY", 0.01, cid[0][1]]
  ];
  return definition;
}


function status(diff, change, cashTotalizer) {
  let statusInfo = {
    status: "",
    change: []
  };

  let totRemainingCash = totalizeRemainingCash(cashTotalizer);
  let totChangeAmount = totalizeChange(change);

  if (diff > totChangeAmount) statusInfo.status = "INSUFFICIENT_FUNDS";
  else if (totRemainingCash == 0) {
    statusInfo.status = "CLOSED";
    statusInfo.change = closedChangeInfo(cashTotalizer, summarizeChange(change));

  } else {
    statusInfo.status = "OPEN";
    statusInfo.change = summarizeChange(change)
  }
  return statusInfo;
}

function totalizeChange(chasRegisterInfo) {
  return chasRegisterInfo.reduce((acum, item) => {
    acum += acum + item[1];
    return acum;
  }, 0);
}

function totalizeRemainingCash(chasRegisterInfo) {
  return chasRegisterInfo.reduce((acum, item) => {
    acum += acum + item[2];
    return acum;
  }, 0);
}

function summarizeChange(change) {

  let copyArr = change.slice("");
  let sum = new Map();
  while (copyArr.length > 0) {
    let tot = 0.0;
    let cashName = copyArr[0][0];
    let cashAmount = parseFloat(copyArr[0][1]);
    if (sum.has(cashName)) {
      let currentTot = sum.get(cashName);
      tot = parseFloat(currentTot) + cashAmount;
    } else tot = cashAmount;

    sum.set(cashName, parseFloat(tot.toPrecision()));
    copyArr.splice(0, 1);
  }

  let result = [...sum.entries()];
  console.log(result);
  return result;
}

function closedChangeInfo(cashRegisterInfo, change) {
  let changeInfoAsObject = {};
  change.forEach(element => {
    let aux = element[1].toFixed(2);
    changeInfoAsObject[element[0]] = parseFloat(aux).toPrecision();
  });

  let response = [];

  cashRegisterInfo.map(item => {
    let aux = [];
    aux.push(item[0], item[2]);
    if (changeInfoAsObject.hasOwnProperty(item[0])) {
      aux[1] = parseFloat(parseFloat(changeInfoAsObject[item[0]]).toPrecision());
    }
    response.unshift(aux);
  });
  console.log(response);

  return response;
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])