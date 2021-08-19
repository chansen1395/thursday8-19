function toRomanNumerals(number) {
  if (number.toString().trim().length === 0){
    return 0;
  };
  
  let stringNum = number.toString(); 
  // const numeralArray = []
  for (const letter of stringNum) {
    
  }
  if (stringNum.length === 1)
    if (number < 4) {
      return stringNum = "I".repeat(number);
    } else if (number === 5){
      return stringNum = "V";
    } else if (number === 4) {
      return stringNum = "IV";
    } else if ((number > 5) && (number < 9)) {
      return stringNum = "V" + "I".repeat(number - 5);
    } else {
      return stringNum = "IX";
    }

  
  };
  

  // https://github.com/chansen1395/thursday8-19

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
// Co-authored by Anna Clarke: <annac.klingberg@gmail.com>