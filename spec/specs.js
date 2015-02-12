describe("romanNumeral", function() {
  it("adds the values of symbols if no subtraction is required", function() {
    expect(romanNumeral(3)).to.equal("III");
  });
  
  it("converts a number to roman numerals for a number less than ten that doesn't require subtraction", function() {
    expect(romanNumeral(8)).to.equal("VIII");
  });
});
