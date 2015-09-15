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

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("Home", "123 Happy Lane", "Happyville", "Oregon");
    expect(testAddress.kind).to.equal("Home");
    expect(testAddress.street).to.equal("123 Happy Lane");
    expect(testAddress.city).to.equal("Happyville");
    expect(testAddress.state).to.equal("Oregon");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("Home","123 Happy Lane", "Happyville", "Oregon");
    expect(testAddress.fullAddress()).to.equal("Home, 123 Happy Lane, Happyville, Oregon");
  });
});
