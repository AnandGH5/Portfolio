
   $(document).click(function (event) {
    var clickover = $(event.target); 
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    } 
});
       $(".about").click(function() {
    var offset = -50; 
$(".about").addClass("active");
       $(".myskills").removeClass("active");
       $(".Projects").removeClass("active"); 
       $(".Contact").removeClass("active");
    $('html, body').animate({
        scrollTop: $(".container-fluid").offset().top + offset
    }, 200);
});
     
     $(".myskills").click(function() {
    var offset = 40;
       $(".myskills").addClass("active");
       $(".about").removeClass("active");
       $(".Projects").removeClass("active");
       $(".Contact").removeClass("active");       
    $('html, body').animate({
        scrollTop: $(".skillsbefore").offset().top + offset
    }, 200);
});    
     
         $(".Projects").click(function() {
    var offset = -50; 
 $(".Projects").addClass("active");
       $(".about").removeClass("active");
       $(".myskills").removeClass("active");
       $(".Contact").removeClass("active");
    $('html, body').animate({
        scrollTop: $(".proj").offset().top + offset
    }, 200);
});
          
         $(".Contact").click(function() {
    var offset = -50; 
$(".Contact").addClass("active");
       $(".about").removeClass("active");
       $(".myskills").removeClass("active");
       $(".Projects").removeClass("active");
    $('html, body').animate({
        scrollTop: $(".cnt").offset().top + offset
    }, 200);
});
 $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 200;            

    if(y_scroll_pos > scroll_pos_test) {
       $(".navbar").css("opacity", ".95");   
    }
   else{
      $(".navbar").css("opacity", "1");
      
   }
 });