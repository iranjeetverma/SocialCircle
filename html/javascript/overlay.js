$(document).ready(function(){
   $(".img").mouseenter(function(){
        $(".close-overlay").removeClass("hidden");
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    });
});