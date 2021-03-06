var makeDumbledoreDancer = function(top, left, timeBetweenSteps) {
  
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    makeDancer.call(this, top, left, timeBetweenSteps);
    //this.timeBetweenSteps = 300;
    this.$node.addClass('dumbledore');
  };
  
    makeDumbledoreDancer.prototype = Object.create(makeBlinkyDancer.prototype);
    makeDumbledoreDancer.prototype.constructor = makeDumbledoreDancer;
    
    
    makeDumbledoreDancer.prototype.step = function() {
      // call the old version of step at the beginning of any call to this new version of step
      // console.log("blinkyDancer file: this is" + this);
      makeBlinkyDancer.prototype.step.call(this);
      
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
    //   this.$node.toggle();
    };