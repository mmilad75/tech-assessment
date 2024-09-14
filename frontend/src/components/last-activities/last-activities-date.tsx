import { IActivityItem } from ".";
import useTimeDate from "@/hooks/use-time-date";

type LastActivitiesDateProps = Pick<IActivityItem, "date">;

const LastActivitiesDate: React.FC<LastActivitiesDateProps> = ({ date }) => {
  const { formattedDate, formattedTime } = useTimeDate(date);

  return (
    <>
      <span className="text-sm">{formattedDate}</span>
      <span className="ml-2 text-xs text-text-secondary px-3 py-2 bg-elevation-3 rounded-corner">
        {formattedTime}
      </span>
    </>
  );
};

export default LastActivitiesDate;
