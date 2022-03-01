let productsElements = document.querySelectorAll('.products');
let slidelineElements = document.querySelectorAll('.slideline');
let slidebarElements = document.querySelectorAll('.products-slidline');
let pxTopx = 0; // отношение динны слайдбара к длинне продуктовой линии
let previousSwipeX = 0;
let activeSlider = '';
let 

function scrolling(e2) {
    console.log(e2.pageX, previousSwipeX)
    const vector = (e2.pageX - previousSwipeX);
    let slidelineleft = Number.parseInt(slideline.style.left)
    if (Number.isNaN(slidelineleft)) {
        slidelineleft = 0
    }

    products.scroll(products.scrollLeft + (vector * pxTopx), 0);
    previousSwipeX = e2.pageX;

    if ((slidelineleft + vector) < 0) {
        slideline.style.left = '0px'
        return
    }
    if ((slideline.clientWidth + slidelineleft) + vector > slidebar.clientWidth) {
        slidebar.style.left = (products.scrollWidth - products.clientWidth) / pxTopx + 'px'
        return
    }

    slideline.style.left = (slidelineleft + vector) + 'px'
}

document.addEventListener('mousedown', e1 => {
    previousSwipeX = e1.pageX;
    if (e1.target.closest('.slideline')) {
        document.addEventListener('mousemove', scrolling)
    }
})
document.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', scrolling);
})

slideline.style.width = ((products.clientWidth / products.scrollWidth) * 100) + '%'

pxTopx = (products.clientWidth / slideline.clientWidth);

console.log((products.clientWidth / products.scrollWidth) * 100)