require('should');
const sc = require('./string-calculator');

describe("String Calculator", () => {
  it("Can sum empty strings", () => {
    sc("").should.eql(0);
  })
});
