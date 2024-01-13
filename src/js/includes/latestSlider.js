import Swiper, { Scrollbar, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const latestSlider = () => {
    new Swiper('.latest-slider', {
        modules: [Scrollbar, Navigation],
        spaceBetween: 30,
        slidesPerView: 5,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: '.latest-slider__next',
            prevEl: '.latest-slider__prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1540: {
                slidesPerView: 5,
            },
        },
    });
}

export default latestSlider;