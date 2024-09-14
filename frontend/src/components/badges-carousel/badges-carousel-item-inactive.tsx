import Image from "next/image";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useMemo } from "react";
import { mapDistanceToProps } from "./badges-carousel.config";

interface IBadgesCarouselItemInactiveProps {
  title: string;
  icon: string | StaticImport;
  distance: number;
}

const BadgesCarouselItemInactive: React.FC<
  IBadgesCarouselItemInactiveProps
> = ({ title, icon, distance }) => {
  const config = useMemo(() => {
    return mapDistanceToProps[distance];
  }, [distance]);

  return (
    <section
      className="flex items-center justify-center mx-auto"
      style={{ width: config.width }}
    >
      <div className="w-full">
        <div
          className="bg-elevation-3 rounded-xl mx-auto"
          style={{ width: config.imageSize, height: config.imageSize }}
        >
          <Image
            className="rounded-full grayscale w-full h-full"
            src={icon}
            alt={title}
            height={64}
            width={64}
            quality={100}
          />
        </div>
        <div className="mt-2 py-2 px-3 bg-elevation-3">
          <div className="flex gap-2">
            <div className="flex-grow h-3 bg-text-disabled rounded-content"></div>
            <div className="flex-grow h-3 bg-text-disabled rounded-content"></div>
            <div className="flex-grow h-3 bg-text-disabled rounded-content"></div>
          </div>
          <div className="h-3 mt-2 bg-text-disabled rounded-content"></div>
        </div>
      </div>
    </section>
  );
};

export default BadgesCarouselItemInactive;
