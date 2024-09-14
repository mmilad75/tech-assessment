import clsx from "clsx";

export interface ISectionProps {
  title: string;
  fullWidth?: boolean;
  className?: string;
}

const Section: React.FC<React.PropsWithChildren<ISectionProps>> = ({
  title,
  fullWidth = false,
  className,
  children,
}) => {
  return (
    <section className={clsx(!fullWidth && "container", className)}>
      <header className="mb-5">
        <h2 className="text-base font-medium text-text-secondary leading-normal">
          {title}
        </h2>
      </header>
      <main>{children}</main>
    </section>
  );
};

export default Section;
