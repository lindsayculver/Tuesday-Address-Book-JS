describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Cutie", "Patootie");
    expect(testContact.firstName).to.equal("Cutie");
    expect(testContact.lastName).to.equal("Patootie");
    expect(testContact.addresses).to.eql([]);
  });
});
