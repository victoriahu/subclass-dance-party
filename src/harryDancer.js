var makeHarryDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeBouncyDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer" id = "awkward"><img src = "https://vignette.wikia.nocookie.net/potterpuppetpals/images/b/b3/Harry_Potter_Puppet_Pal.png/revision/latest?cb=20111127203016"></span>');
  this.$node.addClass('harry');


};

  makeHarryDancer.prototype = Object.create(makeBouncyDancer.prototype);
  makeHarryDancer.prototype.constructor = makeHarryDancer;
  
  
  makeHarryDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeBouncyDancer.prototype.step.call(this);
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    //do stuff to element later
    //this.$node.toggle();
  };