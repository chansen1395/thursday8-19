function toRomanNumerals(number) {
  if (number.toString().trim().length === 0){
    return 0;
  };
  
  let stringNum = number.toString(); 
  // const numeralArray = []

  if (stringNum.length === 1)
    if (number < 4) {
      return stringNum = "I".repeat(number);
    }

  
  };
  
  // if number is less then 4, add I * number
  // if 
  
  // if input is 1340
  // turn 1340 into a string.length
  // if length === 4
  // then index[0] is our keyNumeral
  // convert keyNumeral 1 to M
  // then index [1] is our secondayNumeral
  // convert secondaryNumeral to CCC
  // index [2] is thirdN
  // convert 
  
  // 1 = I
// 2 = II
// 3 = III 
