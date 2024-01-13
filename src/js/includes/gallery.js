import Swiper, { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const gallery = () => {
    const galleryAll = document.querySelectorAll('.gallery');

    galleryAll?.forEach(item => {
        const galleryThumbs = item.querySelector('.gallery-thumbs');
        const gallerySlider = item.querySelector('.gallery-slider');

        const galleryThumbsSwiper = new Swiper(galleryThumbs, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 4.5,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 5.5,
                    spaceBetween: 15,
                },
            },
        });

        const gallerySliderSwiper = new Swiper(gallerySlider, {
            modules: [Thumbs, Navigation],
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            autoHeight: true,
            spaceBetween: 0,
            thumbs: {
              swiper: galleryThumbsSwiper
            },
            navigation: {
                nextEl: ".gallery-slider__next",
                prevEl: ".gallery-slider__prev",
            },
        });
    });
}

export default gallery;