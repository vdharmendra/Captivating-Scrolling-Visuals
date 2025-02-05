// SELECTING EACH SECTION
var section1 = $('#sec1').offset().top;
var section2 = $('#sec2').offset().top;
var section3 = $('#sec3').offset().top;

// SETTING SCROLLOFFSET IMAGE CHANGE AT THIS POSITION
var scrollOffset = 300;


// WINDOWS SCROLL FUNCTION WHILE WINDOWS IS SCROLLING
$(window).scroll(function() {  
  
   
  // GET WINDOWS HEIGHT
  var scroll = $(window).scrollTop() + scrollOffset;  
  

  // CHANGE THE IMAGE OF SEC-1 WHEN WINDOWS GET TO SCROLL  
  if ( scroll < 500 ) {
    $('.gridImage img').attr('src', './img/a1.jpg');
  }
  
  // CHANGE THE IMAGE OF SEC-2 WHEN WINDOWS GET TO SCROLL
  if ( scroll > section2 ) {
    $('.gridImage img').attr('src', './img/a2.jpg');
  }

  // CHANGE THE IMAGE OF SEC-3 WHEN WINDOWS GET TO SCROLL
  if ( scroll > section3 ) {
    $('.gridImage img').attr('src', './img/a3.jpg');
  }
});


