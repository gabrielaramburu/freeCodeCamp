function orbitalPeriod(arr) {
  arr.forEach(orbiter =>{
    orbiter.orbitalPeriod = calcOrbitalTimeInSecond(orbiter.avgAlt);
    delete orbiter.avgAlt;
  });
  console.log(arr);
  return arr;
}

function calcOrbitalTimeInSecond(averageAlt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let axis = earthRadius + averageAlt;

  let orbitalP = 2*Math.PI*Math.sqrt(Math.pow(axis,3)/GM);
  orbitalP = Math.round(orbitalP);
  return orbitalP;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);