$(document).ready(function () {

  //javascript if browser width is less x than change css
  $(function () {
    $(window).on("load resize", function () {
      $(".backgroundPic").css("height", window.innerHeight);
    });
  });



  //Smooth Scrolling
  $('.Introduction a').bind('click', function () {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });


  //Adding carousel
  $('.carousel').carousel();



});