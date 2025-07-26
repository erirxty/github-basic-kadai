const mySwiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  on: {
    init: function () {
      this.slides[this.activeIndex]
        .querySelectorAll(".item")
        .forEach((item, index) => {
          item.style.animation = `slideInFromBottomRight 0.8s ease-out ${
            0.2 * index
          }s forwards`;
        });
    },

    slideChangeTransitionEnd: function () {
      this.slides.forEach((slide) => {
        slide.querySelectorAll(".item").forEach((item) => {
          item.style.animation = "none";

          item.style.opacity = "0";
          item.style.transform = "translate(30px, 30px)";
        });
      });

      this.slides[this.activeIndex]
        .querySelectorAll(".item")
        .forEach((item, index) => {
          item.style.animation = `slideInFromBottomRight 0.8s ease-out ${
            0.2 * index
          }s forwards`;
        });
    },
  },
});
