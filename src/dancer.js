// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //console.log(makeDancer.prototype);
  //why does this.step() not work?
  // this.prototype.step();
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  
  console.log(this);
  makeDancer.prototype.step.call(this);

  makeDancer.prototype.setPosition.call(this, top, left);


};


  makeDancer.prototype.step = function() {
    // the basic Dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    console.log("step is invoked");
    //setTimeout(this.step, this.timeBetweenSteps);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };
  

  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
 