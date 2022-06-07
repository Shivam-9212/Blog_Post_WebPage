var i = 1;
$("h1").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:i})
  i = i - 0.25; 
});
