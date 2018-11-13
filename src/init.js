$(document).ready(function() {
  window.dancers = [];
  window.numHarry = 0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    // if awekward dancer
    if (dancer instanceof makeAwkwardDancer) {
      dancer.$node.mouseover(() => alert('hi'));
    }
    if (dancer instanceof makeBouncyDancer) {
      dance.$node.addClass(dancer.name);
    }
    // setup click listener

  });

  $(".lineUp").click(function() {
    console.log(window);
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(i);
    }
  });

  $(".dumbledoreButton").click(function() {
    var dancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      'dumbledore'
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    dancer.$node.mouseover(function() {
      dancer.$node.css('content', 'url(images/phoenix.jpg)');
    })
  });


  $(".bouncyButton").click(function(e) {
    if (e.target.attributes.charName.value === "harry") {
      if (window.numHarry > 0) {
        return;
      }
    else {
      numHarry++;
    }
    }
    var dancer = new makeBouncyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      e.target.attributes.charName.value
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".awkwardButton").click(function(e) {
    var dancer = new makeAwkwardDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      e.target.attributes.charName.value
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  
  $(".shootHarry").click(function() {
    //iterate through all dancers 
    //if dancer is voldemort instance
    //create an element circle ball
    //assign from location to voldemort's location
    //set to location to harry's location
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeAwkwardDancer) {
        if (window.dancers[i].name === "voldemort") {
          let currentVoldemort = window.dancers[i];
          // create element and store it in newSpell
          var $newSpell = $('<span class="spell"></span>');
          // copy voldemorts positions and apply it to newSPELL
          // var voldemortPosition = currentVoldemort.$node.css(styleSettings);
          // append newSpell to body
          var styleSettings = {
            top: currentVoldemort.$node.css("top"),
            left: currentVoldemort.$node.css("left")
          }
          
          $("body").append($newSpell);
          $newSpell.css(styleSettings);
        }
      }
    }
  });

   $('.shootHarryFinal').click(function() {
     // find harry
    var harryPosition = {};
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeBouncyDancer) {
       if (window.dancers[i].name === "harry") {
         harryPosition.left = window.dancers[i].$node.css("left"),
         harryPosition.top = window.dancers[i].$node.css("top")
       }
      }
    }
    // iterate through spells
    let $spells = $('.spell');
    $spells.animate({
      left: harryPosition.left,
      top: harryPosition.top
    }, 4000, function() {
      // Animation complete.
      $('.spell').remove();
      $('.harry').remove();
      window.numHarry = 0;
    });
   });
  
}); // END document.ready

