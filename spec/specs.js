describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Cutie", "Patootie");
    expect(testContact.firstName).to.equal("Cutie");
    expect(testContact.lastName).to.equal("Patootie");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Yucky", "Ducky");
    expect(testContact.fullName()).to.equal("Yucky Ducky");
  });
});
