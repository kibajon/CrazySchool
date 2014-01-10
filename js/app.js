
$(function() {

  $('.nav li').click(function(){
    console.log('afd')
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });
});