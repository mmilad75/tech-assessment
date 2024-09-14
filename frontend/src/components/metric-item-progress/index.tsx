import MetricItem, { IMetricItemProps } from "../metric-item";
import clsx from "clsx";
import Tag from "../tag";

export interface IMetricItemProgressProps {
  actions: Array<IMetricItemProps>;
  totalEarnings: string | number;
}

const MetricItemProgress: React.FC<IMetricItemProgressProps> = ({
  actions,
  totalEarnings,
}) => {
  const totalEarningsFormatted =
    totalEarnings === "string" ? totalEarnings : totalEarnings.toLocaleString();

  const completedCount = actions.reduce((count, action) => {
    if (action.actionCard === "complete") {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <section className="text-sm w-full">
      <header className="flex justify-between">
        <div>
          <span className="text-text-primary font-semibold">How to Earn:</span>
          <span className="text-text-secondary ml-2">
            Complete the actions for the badge, no specific order needed.
          </span>
        </div>
        <div>
          <Tag variant="secondary">
            {completedCount}/{actions.length} completed
          </Tag>
          <Tag variant="primary" className="ml-3">
            Total Earnings: {totalEarningsFormatted}
          </Tag>
        </div>
      </header>
      <div>
        <div className="md:flex md:flex-wrap md:my-0 md:-mx-3">
          {actions.map((action, index) => (
            <div
              className={clsx(
                "flex-grow",
                "md:w-1/2 xl:w-1/3 2xl:w-1/4",
                "my-5 md:my-4 md:px-3 "
              )}
              key={index}>
              <MetricItem
                className="h-full w-full"
                title={action.title}
                actionCard={action.actionCard}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap gap-x-2 py-3">
          {actions.map((action, index) => (
            <div
              key={index}
              className={clsx("flex-grow h-2 bg-elevation-3 rounded-corner", {
                "bg-primary-500": action.actionCard === "complete",
              })}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricItemProgress;
