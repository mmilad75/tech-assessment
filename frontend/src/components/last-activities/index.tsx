import ActivityListItem, {
  IActivityListItemProps,
} from "../activity-list-item";

export interface ILastActivitiesProps {
  data: IActivityListItemProps[];
}

const LastActivities: React.FC<ILastActivitiesProps> = ({ data }) => {
  return (
    <div>
      <ActivityListItem type="header" />
      {data.map((item, index) => (
        <ActivityListItem
          {...item}
          key={index}
          odd={index % 2 === 1}
          lastItem={index === data.length - 1}
        />
      ))}
    </div>
  );
};

export default LastActivities;
