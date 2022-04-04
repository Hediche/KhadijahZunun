

$('#CV_img').mouseover(function(){
  $('#CV_img').animate({'width':"350px"},"slow");
  $('.me-coding').css("color","purple").animate({'font-size':"1.8rem"},"slow");
})
$('.skill').mouseover(function(){
  $('.skill').animate({'width': '80%'},"slow");
  $('.skill').animate({'font-size':"1.4rem"});
})
  $('.i').mouseover(function(){
    $('.i').animate({"font-size":"6rem"},"slow");
  });
  $('.work-exp').mouseover(function(){
    $('.work-exp').text("I was a researcher in biostatistics and bioinformatics in my previous jobs.").css("color","grey").animate({'font-size':"3rem"},"slow");
  });

  $(".mycontr").mouseover(function(){
    $('.mycontr').css("color","purple")
    $(".mycontrtxt").css("color","blue").animate({'font-size':"1.8rem"},"slow");
  });

$('.mylogoimg').mouseover(function(){
  $('.mylogoimg').animate({width:"320px"}, "slow");

});
$('.uniba').mouseover(function(){
  $('.uniba').animate({width:"350px"});
  $('.unibatxt').css("color","purple","slow").animate({'font-size':"1.8rem"},"slow");

});
$('.unicam').mouseover(function(){
  $('.unicam').animate({width:"400px"}, "slow");
  $('.unicamtxt').css("color","purple").animate({'font-size':"1.8rem"},"slow");
});
$('.hobby').mouseover(function(){
  $('.hobby').animate({'margin-bottom':"50px"},"slow");
});
