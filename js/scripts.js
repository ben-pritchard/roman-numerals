var romanNumeral = function(number) {
  // var numerals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  var numerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

  var romanNumerals = [];

  while (number > 0) {
    if (number >= 5) {
      romanNumerals.push(numerals[5]);
      number -= 5;
    } else if (number >= 1) {
      romanNumerals.push(numerals[1]);
      number--;
    }
  }
  return romanNumerals.join("");
}
