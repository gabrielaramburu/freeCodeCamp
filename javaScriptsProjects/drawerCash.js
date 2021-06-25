function checkCashRegister(price, cash, cid) {
   
    let diff = cash - price;
    let statusInfo = status(diff);
    if (statusInfo.status === "OPEN") {
      let change = decrementAmount(diff);
      statusInfo.change=summarizeChange(change);
    }
    console.log(statusInfo);
    return statusInfo;
  }
  
  function status(diff){
    let statusInfo = {
      status:"",
      change:[]
    };
   if (diff < 0) statusInfo.status="INSUFFICIENT";
   else if (diff == 0) statusInfo.status="CLOSED";
   else {
     statusInfo.status="OPEN";
   } 
   return statusInfo;
  }
  
  function decrementAmount(amount){
    let moneyValues=currencyUnit();
    if (amount==0){
      return [];
    }
  
    let i=0;
    for (;i<moneyValues.length;i++){
      if (amount >= moneyValues[i][1]) break;
    }
  
    let valueToDecrement = moneyValues[i][1];
    let roundedTotal =(amount-valueToDecrement).toFixed(2);
  
    let values = decrementAmount(roundedTotal);
    values.unshift(moneyValues[i]);
    return values;
  }
  
  function currencyUnit(){
    return [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["PENNY", 0.01]
  ];
  }
  
  function summarizeChange(change){
    let currencyKey = currencyUnit().map(currency =>{ 
      return currency[0]});
  
    currencyKey.foreach(currency =>)  
    console.log(currencyKey);
  }
  
  let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(result);