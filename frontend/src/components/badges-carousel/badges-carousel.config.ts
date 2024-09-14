import { Settings } from "react-slick";

type DistanceConfig = {
  width: number;
  imageSize: number;
};

export const settings: Settings = {
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToScroll: 1,
  speed: 500,
  adaptiveHeight: true,
  variableWidth: true,
};

export const mapDistanceToProps: { [key: number]: DistanceConfig } = {
  0: {
    width: 178,
    imageSize: 64,
  },
  1: {
    width: 96,
    imageSize: 48,
  },
  2: {
    width: 78,
    imageSize: 40,
  },
  3: {
    width: 62,
    imageSize: 32,
  },
};
