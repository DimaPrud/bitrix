$(document).on('click', '#leave_request_bottom', function(){
    $('#leave_request_menu').toggle();
});

$(document).on('click', '#leave_summary_bottom', function(){
    $('#leave_summary_menu').toggle();
});

$(document).on('click', 'html',  function(e){
    let block1 = $('.leave_bottom a');
    let block2 = $('.headRight form');
    if((!block1.is(e.target) && block1.has(e.target).length === 0) && (!block2.is(e.target) && block2.has(e.target).length === 0)) {
        $('.headRight form').hide();
    }
});


// let slideIndex = 1;
// showSlides(slideIndex);
//
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//     let slides = document.getElementsByClassName("imgHead");
//
//     /* Проверяем количество слайдов: */
//     slideIndex = n
//
//
//     /* Проходим по каждому слайду в цикле for: */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     /* Делаем элемент блочным: */
//     slides[slideIndex - 1].style.display = "block";
// }



$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'navInput'
    });
});



