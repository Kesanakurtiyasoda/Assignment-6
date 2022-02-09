//Assignment-1
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  console.log(addNumbers(2, 3));
  
  //Assignment-2
  function absolute(num1, num2) {
    var difference = num1 - num2;
    return difference;
  }
  console.log(absolute(12, 4));
  
  //Assignment-3
  function isOdd(num) {
    if (num % 2 == 1) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isOdd(10));
  
  //Assignment-4
  function oddnumber(specified) {
    for (var i = 1; i < specified; i = i + 2) {
      console.log(i);
    }
  }
  oddnumber(32)
  
  //Assignment-5
  var array = [1, 2, 3];
  function average(array) {
    if (array.length === 0) {
      return 0;
    } 
    else {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }
      average = sum / array.length;
      console.log(average);
    }
  }
  average(array);
  
  //Assignment-6
  function char(a) {
    return a.toLowerCase();
  }
  console.log(char("EDSTEM"));