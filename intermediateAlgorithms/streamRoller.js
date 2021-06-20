function steamrollArray(arr) {
    let values=[];
    arr.forEach(item =>{
      if (item instanceof Array) {
        values.push(...steamrollArray(item));
      } else values.push(item);
    })
    console.log(values);
    return values;
  }
  steamrollArray([[["a"]], [["b"]]]);
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([1, [], [3, [[4]]]]);
  steamrollArray([1, {}, [3, [[4]]]]);