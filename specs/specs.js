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
