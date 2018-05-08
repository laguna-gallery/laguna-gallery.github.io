/* ==========================================================================
   The Laguna Art Gallery / alfa-front.com - 2017
   ========================================================================== */

/*
 * Animation du scroll.
 */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    });
});

/*
 * Animation des éléments à travers jQuery et la librarie Waypoint.js
 */

$('.noback').waypoint(function(direction) {
    document.getElementById('navigation').style.opacity = 0;
    document.getElementById('art-01-detail').style.opacity = 0;
    $('#navigation').css('visibility','hidden');
    $('.fleche-wrap').css('visibility','visible');
});


$('#art-01').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(1) a').css('color','#000000');
  $('#navigation').css('visibility','visible');
  document.getElementById('art-01-hide').style.opacity = 1;
  document.getElementById('navigation').style.opacity = 1;
  document.getElementById('art-01-detail').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-01').waypoint(function(up) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(1) a').css('color','#000000');
}, {
   offset: -1
});


$('#art-02').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(2) a').css('color','#000000');
  document.getElementById('art-02-hide').style.opacity = 1;
  document.getElementById('art-02-detail').style.opacity = 1;
  $('.fleche-wrap').css('visibility','hidden');
  }, {
   offset: 300
});

$('#art-02').waypoint(function(up) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(2) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-03').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(3) a').css('color','#000000');
  document.getElementById('art-03-hide').style.opacity = 1;
  document.getElementById('art-03-detail').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-03').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(3) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-04').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(4) a').css('color','#000000');
  document.getElementById('art-04-hide').style.opacity = 1;
  document.getElementById('art-04-detail').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-04').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(4) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-05').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(5) a').css('color','#000000');
  document.getElementById('art-05-hide').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-05').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(5) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-06').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(6) a').css('color','#000000');
  document.getElementById('art-06-hide').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-06').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(6) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-07').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(7) a').css('color','#000000');
  document.getElementById('art-07-hide').style.opacity = 1;
}, {
   offset: 300
});

$('#art-07').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(7) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-08').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(8) a').css('color','#000000');
  document.getElementById('art-08-hide').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-08').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(8) a').css('color','#000000');
}, {
   offset: -1
});

$('#art-09').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(9) a').css('color','#000000');
  document.getElementById('art-09-hide').style.opacity = 1;
  }, {
   offset: 300
});

$('#art-09').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(9) a').css('color','#000000');
}, {
   offset: -1
});
$('#info').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(9) a').css('color','#000000');
  }, {
   offset: 300
});
$('#info').waypoint(function(direction) {
  $('#navigation ul li a').css('color','#ffffff');
  $('#navigation ul li:nth-child(10) a').css('color','#000000');
}, {
   offset: 10
});