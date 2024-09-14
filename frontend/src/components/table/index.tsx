import clsx from "clsx";
import { ReactNode } from "react";
import Loading from "../last-activities/loading";

export interface ITableColumn<T> {
  title: string;
  dataIndex: keyof T;
  key?: string;
  render?: (value: T[keyof T], record: T) => ReactNode;
  width?: string | number;
}

export interface ITableProps<T> {
  columns: ITableColumn<T>[];
  dataSource: T[];
  loading: boolean;
}

const Table = <T,>({ columns, dataSource, loading = true }: ITableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-content overflow-hidden text-xs leading-5">
        <thead>
          <tr className="border-b border-elevation-background">
            {columns.map((column) => (
              <th
                key={column.key || (column.dataIndex as string)}
                className="py-4 px-6 text-left bg-elevation-3 text-text-secondary font-medium"
                style={{ width: column.width }}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((record, index) => (
            <tr
              key={index}
              className={clsx(" border-b border-elevation-background", {
                "bg-elevation-1": index % 2 === 0,
                "bg-elevation-2": index % 2 === 1,
              })}>
              {columns.map((column, index) => (
                <td className={clsx("px-6 py-5")} key={index}>
                  {loading ? (
                    <Loading />
                  ) : column.render ? (
                    column.render(record[column.dataIndex], record)
                  ) : (
                    (record[column.dataIndex] as ReactNode)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
