describe('cryptoSquare', function(){
    it("creates string with no white spaces", function(){
      expect(cryptoSquare("We need more coffee!")).to.equal("Weneedmorecoffee!");
    });
});
