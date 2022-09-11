function tekmiciftmi(num) {
    if (isNaN(num)) {
      console.log(" Bu bir sayı değil ! ");
    } 
    else {
      const strNumArr = num.toString().split("");
      let sum = 0;
      for (i = 0; i < strNumArr.length; i++) {
        sum += parseInt(strNumArr[i]);
      }
      sum % 2 === 1 ? console.log("Odd") : console.log("Even");
    }
  }
  
  tekmiciftmi(112133); // İstenilen sayıyı buaraya yazıp programı deneyebiliriz.
