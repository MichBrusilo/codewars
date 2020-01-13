function positiveSum(arr) {
    for(var i=0, count = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        count += arr[i]
      }
    }
    return count
  }
  
  var arr1 = [2, -4, 3, -6, 17];
  console.log ( positiveSum(arr1) )