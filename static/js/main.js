$(".MenuHeader .container__bars").click(function(){
      $('.MainMenu').slideToggle();
      $('.MainMenu .MainMenu_2').css("display", "none");
});

$(".MainMenu li").click(function(){
      $('.MainMenu .MainMenu_2').slideUp();
      $(this).find('ul').slideToggle();
});


$(window).resize(function() {
  if($(window).width() > 768){
      $('ul').removeAttr('style');
  }
})
