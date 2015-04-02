Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'none', // none/fade/slide/convex/concave/zoom
});

var HOMEBUTTON = (function (){
  var controls = $('.controls');
  var home_button = "<div class='navigate-home'/>";
  var add = function () {
    controls.prepend(home_button);
  };
  var activate = function () {
    $('.navigate-home').addClass('enabled');
  };
  var deactivate = function () {
    $('.navigate-home').removeClass('enabled');
  };
  var check_status = function (event) {
    if (event.indexh > 0) {
      activate();
    } else {
      deactivate();
    }
  };
  return {
    add: add,
    check_status: check_status 
  };
}());

var NEON = (function () {
  var neon_signs = $('.neon');
  var get_random = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  var timings = function () {
    setInterval(function(){
      var el = get_random(0,4);
      neon_signs.eq(el).addClass('lit');
      setTimeout(function(){
        neon_signs.eq(el).removeClass('lit');
      }, get_random(100, 3000));
    }, get_random(100, 400));
  };
  return {
    init: timings 
  };
}());

var DOORS = (function () {
  var init = function () {
    var state = Reveal.getState();
    if (state.indexh === 5) {
      DOORS.add();
    }
    return;
  };
  var add = function () {
    if (!$('.door').length) {
      var left_door = "<div class='door left-door'/>";
      var right_door = "<div class='door right-door'/>";
      $('.main').before(left_door + right_door);
    }
  };
  return {
    init: init,
    add: add,
  };
}());

Reveal.addEventListener( 'ready', function( event ) {
  NEON.init();
  DOORS.init();
  HOMEBUTTON.add();
  HOMEBUTTON.check_status(event);
});


Reveal.addEventListener('closed-doors', function (event) {
  DOORS.add();
});

Reveal.addEventListener('slidechanged', function (event) {
  HOMEBUTTON.check_status(event);
});
