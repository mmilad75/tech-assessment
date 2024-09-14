import clsx from "clsx";
import Tag from "../tag";

interface IMetricItemProps {
  title: string;
  actionCard?: "default" | "complete";
  className?: string;
}

const MetricItem: React.FC<IMetricItemProps> = ({
  actionCard = "default",
  title,
  className,
}) => {
  const isCompleted = actionCard === "complete";

  return (
    <section
      className={clsx(
        "bg-elevation-2 text-sm rounded-content overflow-hidden",
        className
      )}
    >
      <header className="flex justify-between items-center px-5 bg-elevation-3 border-b border-elevation-background">
        <span className="leading-9">Action</span>
        {isCompleted && <Tag variant="success">Completed</Tag>}
      </header>
      <main className="px-5 pb-4 pt-2 leading-tight">
        <p>{title}</p>
      </main>
    </section>
  );
};

export default MetricItem;
