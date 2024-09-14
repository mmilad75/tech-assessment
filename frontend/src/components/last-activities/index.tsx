import Table, { ITableColumn } from "../table";
import LastActivitiesType from "./last-activities-type";
import LastActivitiesDate from "./last-activities-date";
import LastActivitiesTransaction from "./last-activities-transaction";
import LastActivitiesPoints from "./last-activities-points";

export interface IActivityItem {
  type: "transaction" | "bridged";
  points: string | number;
  date: string;
  transactionId: string;
  link?: string;
}
export interface ILastActivitiesProps {
  data: IActivityItem[];
  loading?: boolean;
}

const LastActivities: React.FC<ILastActivitiesProps> = ({
  data,
  loading = true,
}) => {
  const columns: ITableColumn<IActivityItem>[] = [
    {
      title: "Activities",
      dataIndex: "type",
      render: (type) => <LastActivitiesType type={type} />,
    },
    {
      title: "Points",
      dataIndex: "points",
      render: (points) => <LastActivitiesPoints points={points} />,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => <LastActivitiesDate date={date} />,
    },
    {
      title: "TXID",
      dataIndex: "transactionId",
      render: (transactionId, { link }) => (
        <LastActivitiesTransaction transactionId={transactionId} link={link} />
      ),
    },
  ];
  return (
    <div>
      <Table loading={loading} columns={columns} dataSource={data} />
    </div>
  );
};

export default LastActivities;
