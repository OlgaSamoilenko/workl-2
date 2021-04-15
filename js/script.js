$(document).ready(function() {
    $('input[name=phone]').mask("+7 (999) 99-99-999");
});
$('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefuit();
        $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').toggleClass('catalog-item__list_active');
    })

});
$('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefuit();
        $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').toggleClass('catalog-item__list_active');
    })

});