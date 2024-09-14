import Table, { ITableColumn } from "../table";
import Tag from "../tag";
import LastActivitiesType from "./last-activities-type";
import LastActivitiesDate from "./last-activities-date";
import LastActivitiesTransaction from "./last-activities-transaction";

export interface IActivityItem {
  type: "transaction" | "bridged";
  points: string | number;
  date: string;
  transactionId: string;
  link?: string;
}
export interface ILastActivitiesProps {
  data: IActivityItem[];
}

const LastActivities: React.FC<ILastActivitiesProps> = ({ data }) => {
  const columns: ITableColumn<IActivityItem>[] = [
    {
      title: "Activities",
      dataIndex: "type",
      render: (type) => <LastActivitiesType type={type} />,
    },
    {
      title: "Points",
      dataIndex: "points",
      render: (points) => <Tag variant="success">+{points}</Tag>,
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default LastActivities;
