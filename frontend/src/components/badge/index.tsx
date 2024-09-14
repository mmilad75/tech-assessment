import Image from "next/image";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IBadgeProps {
  state: "multi" | "points";
  earned: "yes" | "no";
  title: string;
  actionsCount: number;
  amount: number | string;
  icon: string | StaticImport;
}

const Badge: React.FC<IBadgeProps> = ({
  state,
  earned,
  title,
  actionsCount,
  amount,
  icon,
}) => {
  const isEarned = earned === "yes";
  const amountFormatted = state === "multi" ? `${amount}x` : `${amount} Points`;

  return (
    <section
      className={clsx(
        "w-[178px] bg-elevation-3 rounded-xl border overflow-hidden",
        isEarned ? "border-success" : "border-transparent"
      )}
    >
      <header className="flex justify-between px-3 text-xs leading-8 bg-elevation-2">
        <span>{title}</span>
        <span className="text-text-secondary">{actionsCount} Actions</span>
      </header>
      <div className="py-6 text-center">
        <Image
          className={clsx(
            "inline-block rounded-full",
            !isEarned && "grayscale"
          )}
          src={icon}
          alt={title}
          height={64}
          width={64}
          quality={100}
        />
      </div>
      <footer className="px-3 text-xs text-center leading-8 bg-success-elevation1">
        {amountFormatted}
      </footer>
    </section>
  );
};

export default Badge;
