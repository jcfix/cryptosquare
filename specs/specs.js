describe("cryptoSquare", function(){
  it("changes all letters to lowercase", function(){
    expect(cryptoSquare("We need more coffee!")).to.equal("we need more coffee!");
  });
  // it("creates string with no white spaces", function(){
  //   expect(cryptoSquare("we need more coffee!")).to.equal("weneedmorecoffee!");
  // });
  // it("removes punctuation from previous string", function(){
  //   expect(cryptoSquare("weneedmorecoffee!")).to.equal("weneedmorecoffee");
  // });
});
