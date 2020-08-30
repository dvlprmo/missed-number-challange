
// You can add your code, don't forget to add your account line below:
// Your account link goes here: 


function missedNumber(array_of_numbers){
    var len = array_of_numbers.length;
    var sum = array_of_numbers[0] + array_of_numbers[len -1]
    for(let i=0; i< len/2; i++){
      var x = array_of_numbers[i];
      var y = array_of_numbers[len-i-1]
      if((x + y) > sum){
        return Math.abs(y-sum)
      }else if((x + y) < sum){
        return Math.abs(sum-x)
      }
    }
  }
  console.log("Missing number: " + missedNumber([3,6,12]))
  