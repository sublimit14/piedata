document.addEventListener("DOMContentLoaded", () => {
    const width = window.innerWidth;
    if (width > 767) {
        const mainSlider = new Swiper(".main-slider", {
            direction: "vertical",
            effect: "creative",
            mousewheel: true,
            speed: 700,
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, "-120%", -500],
                },
                next: {
                    shadow: true,
                    translate: [0, "120%", -500],
                },
            },
            navigation: {
                nextEl: ".main-slider .swiper-button-next",
                prevEl: ".main-slider .swiper-button-prev",
            },

        });
    }

    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
})


