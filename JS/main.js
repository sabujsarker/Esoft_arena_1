$(document).ready(function(){
    $(".toggler-menu").on("click",function(){
        /*$(this).siblings().toggleClass(".active");*/
        $(this).siblings().css({
            "left":"0"
        });
        /*$(this).siblings().addClass(".active");
        $(this).siblings().removeClass(".active");*/
    });
});

$(window).scroll(function() {
	if($(window).scrollTop() > 100) {
		$('.header').addClass('fix');
	}
	else {
		$('.header').removeClass('fix');
	}
});