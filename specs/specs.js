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
