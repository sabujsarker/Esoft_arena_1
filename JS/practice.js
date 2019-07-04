
$(window).scroll(function () {
    if ($(window).scrollTop()>100) {
        $('.header').addClass('fix');
    }
    else{
        $('.header').removeClass('fix');
    }
})








// $ (window) .scroll ( function () {
//     if ($(window).scrollTop()>100) {
//         $ ('.header') .addClass('fix');
//     } else {
//       $('.header')  .removeClass('fix');
//     }
    
// })