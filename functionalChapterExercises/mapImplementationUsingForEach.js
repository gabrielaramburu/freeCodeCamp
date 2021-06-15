// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
 
  
  this.forEach((item)=>{
    newArray.push(callback(item));
  });
  
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log("outout " + new_s);