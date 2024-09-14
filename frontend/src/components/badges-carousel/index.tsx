"use client";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import BadgesCarouselItem, {
  IBadgesCarouselItem,
} from "./badges-carousel-item";
import { settings } from "./badges-carousel.config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IBadgesCarouselProps {
  badges: IBadgesCarouselItem[];
}

const BadgesCarousel: React.FC<IBadgesCarouselProps> = ({ badges }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [distances, setDistances] = useState<number[]>([]);

  useEffect(() => {
    const calculateSlideDistances = (
      totalSlides: number,
      currentIndex: number
    ) => {
      return Array.from({ length: totalSlides }, (_, i) => {
        const forwardDistance = Math.abs(i - currentIndex);
        const backwardDistance = totalSlides - forwardDistance;
        return Math.min(forwardDistance, backwardDistance, 3);
      });
    };

    const newDistances = calculateSlideDistances(badges.length, currentSlide);
    setDistances(newDistances);
  }, [currentSlide, badges.length]);

  return (
    <div className="badges-carousel slider-container">
      <Slider {...settings} beforeChange={(_, next) => setCurrentSlide(next)}>
        {badges.map((badge, index) => (
          <div key={index} className="h-full" style={{ width: 178 }}>
            <BadgesCarouselItem
              badge={badge}
              isActive={index === currentSlide}
              distance={distances[index]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BadgesCarousel;
