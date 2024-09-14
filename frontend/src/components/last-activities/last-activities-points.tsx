import { IActivityItem } from ".";
import Tag from "../tag";

type LastActivitiesPointsProps = Pick<IActivityItem, "points">;

const LastActivitiesPoints: React.FC<LastActivitiesPointsProps> = ({
  points,
}) => {
  return <Tag variant="success">+{points}</Tag>;
};

export default LastActivitiesPoints;
