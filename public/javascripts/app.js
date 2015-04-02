Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'none', // none/fade/slide/convex/concave/zoom
});

var HOMEBUTTON = (function (){
  var controls = $('.controls');
  var element = "<div class='navigate-home'/>";
  var button;
  var add = function () {
    controls.prepend(element);
    button = $('.navigate-home');
  };
  var activate = function () {
    button.addClass('enabled');
  };
  var deactivate = function () {
    button.removeClass('enabled');
  };
  var check_status = function (event) {
    if (event.indexh > 0) {
      activate();
    } else {
      deactivate();
    }
  };
  var click = function () {
    controls.on('click', '.navigate-home', function () {
      Reveal.slide(0);
    });
  };
  return {
    add: add,
    check_status: check_status,
    click: click
  };
}());

var NEON = (function () {
  var neon_signs = $('.neon');
  var get_random = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  var timings = function () {
    setInterval(function(){
      var el = get_random(0,6);
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
  HOMEBUTTON.click();
});


Reveal.addEventListener('closed-doors', function (event) {
  DOORS.add();
});

Reveal.addEventListener('slidechanged', function (event) {
  HOMEBUTTON.check_status(event);
});
