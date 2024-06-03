$(document).ready(function () {
    var $slider = $('#slider');
    var slideWidth = $('.slide').outerWidth();
    var slideCount = $('.slide').length;
    var totalWidth = slideWidth * slideCount;
    var currentIndex = 0;
    $slider.css('width', totalWidth);
    function slide(direction) {
        currentIndex = (currentIndex + slideCount + (direction === 'next' ? 1 : -1)) % slideCount;
        $slider.animate({ marginLeft: -currentIndex * slideWidth }, 100);
    }
    $('#next-btn, #prev-btn').on('click', function () {
        slide(this.id.split('-')[0]);
    });
});