"use client";
import Carousel from "react-multi-carousel";
import Badge from "../badge";
import BadgeIcon from "@/assets/images/badge1.png";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";

interface IBadgesCarousel {
  badges: string[];
}

const BadgesCarousel: React.FC<IBadgesCarousel> = ({}) => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative">
      <div onClick={() => carouselRef.current?.previous()}>prev</div>
      <div className="mx-9">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          arrows={false}
          centerMode
          infinite
        >
          <Badge
            state="multi"
            earned="no"
            title="test 1"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
          <Badge
            state="multi"
            earned="no"
            title="test 2"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
          <Badge
            state="multi"
            earned="no"
            title="test 3"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
          <Badge
            state="multi"
            earned="no"
            title="test 4"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
          <Badge
            state="multi"
            earned="no"
            title="test 5"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
          <Badge
            state="multi"
            earned="no"
            title="test 6"
            actionsCount={3}
            amount={1.15}
            icon={BadgeIcon}
          />
        </Carousel>
      </div>

      <div onClick={() => carouselRef.current?.next()}>next</div>
    </div>
  );
};

export default BadgesCarousel;
