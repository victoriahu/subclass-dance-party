var makeAwkwardDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer" id = "awkward"></span>');
  this.$node.addClass('awkward');


};

  makeAwkwardDancer.prototype = Object.create(makeDancer.prototype);
  makeAwkwardDancer.prototype.constructor = makeAwkwardDancer;
  
  
  makeAwkwardDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    //do stuff to element later
    //this.$node.toggle();
  };