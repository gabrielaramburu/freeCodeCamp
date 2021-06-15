var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
 const sortedArr = [].concat(arr);
  sortedArr.sort((a, b) => {
    return a === b ? 0:
      a > b ? 1:
      -1
    }
  );
  return sortedArr;
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));