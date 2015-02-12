var romanNumeral = function(number) {
  // var numerals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  var numerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

  var romanNumerals = [];

  while (number > 0) {
    if (number >= 1000) {
      romanNumerals.push(numerals[1000]);
      number -= 1000;
    } else if (number >= 500) {
      romanNumerals.push(numerals[500]);
      number -= 500;
    } else if (number >= 100) {
      romanNumerals.push(numerals[100]);
      number -= 100;
    } else if (number >= 50) {
      romanNumerals.push(numerals[50]);
      number -= 50;
    } else if (number >= 10) {
      romanNumerals.push(numerals[10]);
      number -= 10;
    } else if (number >= 5) {
      romanNumerals.push(numerals[5]);
      number -= 5;
    } else if (number >= 1) {
      romanNumerals.push(numerals[1]);
      number--;
    }
  };

  var countI = 0;

  romanNumerals.forEach(function(numeral) {
    if (numeral === "I") {
      countI++;
    };
  });

  if (countI === 4) {
    var index = romanNumerals.indexOf("I");
    romanNumerals[index] = "I";
    romanNumerals[index+1] = "V";
    romanNumerals.splice((index+2), 2);
  };

  return romanNumerals.join("");
}
