describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should be an instanceof bounceDancer', function() {
    expect(bouncyDancer).to.be.an.instanceof(makeBouncyDancer);
  });
});
