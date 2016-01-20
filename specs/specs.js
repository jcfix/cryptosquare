describe('simplifyText', function(phrase) {

  it("changes all letters to lowercase", function(){
    expect(simplifyText("We")).to.equal("we");
  });
});

describe('stripSpaces', function(lower) {
  it("removes all white spaces!", function(){
    expect(stripSpaces("we need more coffee[.;/!)()(*&%$^%#@#$!)")).to.equal("weneedmorecoffee");
  });
});

describe('calcLength', function(noSpaces) {
  it("calculates length of string", function(){
    expect(calcLength("weneedmorecoffee")).to.equal(16);
  });
});

describe('calcsqrt', function(calcLength) {
  it("calculates square root of length", function(){
    expect(calcsqrt(16)).to.equal(4);
  });
});

describe('columns', function(squareRoot) {
  it("create columns", function(){
    expect(squareRoot(4)).to.equal(4);
  });
});
