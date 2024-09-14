import { IActivityItem } from ".";
import Tag from "../tag";

const LastActivitiesPoints: React.FC<IActivityItem> = ({ points }) => {
  return <Tag variant="success">+{points}</Tag>;
};

export default LastActivitiesPoints;
