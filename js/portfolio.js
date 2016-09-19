$(document).ready(function(){
						   
 $(window).resize(function(){

  $('.bg').css({
   position:'absolute',
   left: ($(window).width() 
     - $('.bg').outerWidth())/2,
   top: ($(window).height() 
     - $('.bg').outerHeight())/2
  });
		
 });
 
 // To initially run the function:
 $(window).resize();

});