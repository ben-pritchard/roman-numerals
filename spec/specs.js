describe("romanNumeral", function() {
  it("adds the values of symbols if no subtraction is required", function() {
    expect(romanNumeral(3)).to.equal("III");
  });

  it("converts a number to roman numerals for a number less than ten that doesn't require subtraction", function() {
    expect(romanNumeral(8)).to.equal("VIII");
  });

  it("returns the roman numeral if subtraction and separation are not required", function() {
    expect(romanNumeral(2666)).to.equal("MMDCLXVI");
  });

  it("returns the roman numeral if subtraction is required", function() {
    expect(romanNumeral(4)).to.equal("IV");
  });

});
