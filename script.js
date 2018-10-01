var divs = $('header'),
    limit = 9000;  /* scrolltop value when opacity should be 0 */

$(document).ready(function(){
    $("#burger-nav img").on("click",function(){
        var className = $("header nav ul").hasClass("open");

        $("header nav ul").toggleClass("open");
        
        if(className){
            $("header").css("height","150px");

        }else{
            $("header").css("height","400px");
        }
    });

    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
     
        /* avoid unnecessary call to jQuery function */
        if (st <= limit) {
           divs.css({ 'opacity' : (1 - st/limit) });
        }
     });

     
});