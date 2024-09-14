import ActivityListItem, { IActivityListItemProps } from "../activity-list-item";

export interface ILastActivitiesProps {
  data: IActivityListItemProps[];
  title: string
};

const LastActivities: React.FC<ILastActivitiesProps> = ({
  title,
  data
}) => {
  return (
    <div>
      <h2 className="text-base text-text-secondary mb-5">{title}</h2>
      <ActivityListItem type="header" />
      {data.map((item, index) => (
        <ActivityListItem {...item} key={index} odd={index % 2 === 1} lastItem={index === data.length - 1} />
      ))}
    </div>
  )
};

export default LastActivities;