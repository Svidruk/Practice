import { ScreenWidth } from '@styles/Breakpoints';

export const categoryScrollSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: ScreenWidth.desktop - 1,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
};

export const photoScrollSettings = {
  dots: true,
  infinite: true,
  speed: 1100,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 7500,
  autoplay: true,
};
