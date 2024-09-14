import clsx from "clsx";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";

interface IBadgesCarouselNavButtonProps {
  type: "prev" | "next";
  onClick?: () => void;
}

const BadgesCarouselNavButton: React.FC<IBadgesCarouselNavButtonProps> = ({
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "absolute top-0 bottom-0 z-50",
        "flex items-center",
        "bg-elevation-3 text-text-button",
        "rounded-button p-4",
        {
          "right-0": type === "next",
          "left-0": type === "prev",
        }
      )}
    >
      {type === "next" ? <ChevronRight /> : <ChevronLeft />}
    </button>
  );
};

export default BadgesCarouselNavButton;
