//bastante conforme con esta solución 
function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
  
    return [...secondWord].every(
      letter => {
        if (firstWord.indexOf(letter) === -1) {
          return false;
        } return true;
      }
    );

  }
  
  mutation(["Tiger", "Zebra"]);