// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function() {$('ul > .card').hide();
$('.container > ul > li').click(function(){
     if( $(this).next().is(":hidden") ) {
       $('ul > .card').hide(500);
       $(this).next().show(500);
      }
      else
      {
       $(this).next().hide(500);
      }
   });
$('.nav-item').hide();
   $('.rounded-circle').click(function(){
       $('.nav-item').toggle(500);
      }
   );
   // $('.login').hide();
   // $('.logina').click(function(){
   //       $('.login').toggle(500);
   // });
   // $('.inscr').hide();
   // $('.signup').click(function(){
   //       $('.inscr').toggle(500);
   // });
});

// CAROUSEL
$(document).on('turbolinks:load', function () {
  // ***************************************************
  // Carousel
  jQuery(function ($) {

    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide = 'li'; // could also use 'img' if you're not using a ul
    var $transition_time = 500; // 0.5 second
    var $time_between_slides = 4500; // 4.5 seconds
    var $next = $("#btn-next");
    var $previous = $("#btn-previous");
    var $miniSlider = $('.ul-mini')
    var $miniSlide = ".mini-circle";

    function slides() {
      return $slider.find($slide);
    };
    // for miniatures
    function minis() {
      return $miniSlider.find($miniSlide);
    };

    slides().fadeOut();

    // set active classes
    minis().first().addClass('mini-active');
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    // Next image function
    $goNext = function () {
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
      minis().eq($i + 1).addClass('mini-active');
    };

    // Previous image function
    $goPrevious = function () {
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      if ($i == 0) $i = slides().length; // loop to start

      slides().eq($i - 1).fadeIn($transition_time);
      slides().eq($i - 1).addClass('active');
      minis().eq($i - 1).addClass('mini-active');
    };

    // auto scroll
    $interval = setInterval(
      $goNext
      , $transition_time + $time_between_slides
    );

    // Next button
    $next.on('click', $goNext);

    // Previous button
    $previous.on('click', $goPrevious);

    // clickable miniatures
    $miniSlider.on('click', function (event) {
      var $j = event.target.id;
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
      minis().eq($i).removeClass('mini-active');

      slides().eq($j).fadeIn($transition_time);
      slides().eq($j).addClass('active');
      minis().eq($j).addClass('mini-active');
      $(event.target).removeClass('clicked');
    });
  });

});

// FONCTION EMAIL LU/NON-LU
$(document).ready(function(){
   $("button").click(function(){
       $(this).css("font-weight", "normal");
       $(this).removeClass('unread').addClass('read');
   });
});
