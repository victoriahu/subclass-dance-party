describe('awkwardDancer', function() {

    var awkwardDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      awkwardDancer = new makeAwkwardDancer(10, 20, timeBetweenSteps);
    });
  
    it('should be an instanceof awkwardDancer', function() {
      expect(awkwardDancer).to.be.an.instanceof(makeAwkwardDancer);
    });
  });