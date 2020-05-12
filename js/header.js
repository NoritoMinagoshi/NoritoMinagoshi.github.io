$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (top > 80) {
    $('header').css('background-color', '#fff');
    $('.hover-nav a:before').css('background-color', '#11376B');
    $('.hover-nav a').css('color', '#000');
    $('.logo-black').css('display', 'block');
    $('.logo-white').css('display', 'none');
  } else {
    $('header').css('background-color', 'transparent');
    $('.hover-nav a').css('color', '#fff');
    $('.logo-black').css('display', 'none');
    $('.logo-white').css('display', 'block');
  }
});
