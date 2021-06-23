function truthCheck(collection, pre) {

    let result = collection.every(item =>{
      if (item[pre]) return true;
      else return false;
    });
  
    console.log(result);
    return result;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") ;
  
  truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat");
  
  truthCheck([{"single": "yes"}], "single");
  truthCheck([{"single": ""}, {"single": "double"}], "single");
  truthCheck([{"single": "double"}, {"single": undefined}], "single");
  truthCheck([{"single": "double"}, {"single": NaN}], "single");