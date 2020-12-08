
$(document).ready(function(){
    
  $('li.q').on("click",function(){
        $(this).siblings('li.a').slideUp();
        $(this).next().toggle();
    });
});
