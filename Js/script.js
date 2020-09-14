$(document).ready(function() { 
    $(".stages .stage:not(:first-child)").hide();
    $("div[name=item-district]").click(function() {
        var idx = $(this).attr("idx");
        $(".stages .stage").hide();
        $(`.stages .stage:nth-child(${idx})`).show()
    })
});
$(document).ready(function(){
    $(".menu li").hover(function(){
        $(this).find("ul:first").slideDown(500);
    },function(){
        $(this).find("ul:first").hide(300);
    });
});

window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var menutop = document.getElementById("contents");
    var gototop = document.getElementById("gototop");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
        menutop.style.position = "fixed";
        menutop.style.left = 0 ;
        menutop.style.right = 0;
        menutop.style.background = '#446084';
        menutop.style.zIndex= 9;

        gototop.style.display= "block";
    } else {
        menutop.style.position= "relative";
        menutop.style.background = '#446084';

        gototop.style.display= "none";
    }
};
function goToTop(){
    var timer = setInterval(function(){
        document.documentElement.scrollTop-=30;

        if(document.documentElement.scrollTop <= 0){
            clearInterval(timer);
        }
    },5);
};
$(document).ready(function() {
    $(".thumbail img").click(function() {
        $("img.slide").attr("src", $(this).attr('src'))
    });
});
var scroll = new SmoothScroll('a[href*="#"');