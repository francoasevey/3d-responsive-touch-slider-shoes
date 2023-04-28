const slider_items = $('.slider-items li');
const slider_dots = $('.slider-dots li');
const nav_next = $('.slider-nav.next');

let selected_item = 0;

function setItemSlider(index) {
    selected_item = index;

    slider_items.each(function (idx){
        let offset = idx - selected_item;
        if (offset < 0) offset += slider_items.length;

        for (let i = 0; i < slider_items.length + 1; i++) {
            $(this)
            .removeClass(`item-${i}`)
            .addClass(`item-${offset + 1}`);
        }
        slider_dots
        .eq(selected_item)
        .addClass('active')
        .siblings('li')
        .removeClass('active');
    });
}
slider_items.click(function () {
    setItemSlider($(this).index());
});
slider_dots.click(function () {
    setItemSlider($(this).index());
});