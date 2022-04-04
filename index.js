

$('#CV_img').mouseover(function(){
  $('#CV_img').animate({'width':"350px"});
})
$('.skill').mouseover(function(){
  $('.skill').animate({'width': '80%'});
  $('.skill').animate({'font-size':"1.4rem"});
})
  
  $('.work-exp').mouseover(function(){
    $('.work-exp').text("I was a researcher in biostatistics and bioinformatics in my previous jobs.").css("color","grey");
  });

  $(".mycontr").mouseover(function(){
    $('.mycontr').css("color","purple")
    $(".mycontrtxt").css("color","blue");
  });

$('.mylogoimg').mouseover(function(){
  $('.mylogoimg').animate({width:"320px"});

});
$('.uniba').mouseover(function(){
  $('.uniba').animate({width:"350px"});
  $('.unibatxt').css("color","purple","slow");

});
$('.unicam').mouseover(function(){
  $('.unicam').animate({width:"400px"});
  $('.unicamtxt').css("color","purple");
});
$('.hobby').mouseover(function(){
  $('.hobby').animate({'margin-bottom':"50px"});
});
