import { useMemo } from "react";

import { GET_LOGS_QUERY } from "../schema/query";
import { IActivityItem } from "@/components/last-activities";
import { useQuery } from "@apollo/client";

const useLogsQuery = () => {
  const { data, loading, error } = useQuery(GET_LOGS_QUERY, {
    pollInterval: 60000,
  });

  const transformedData: IActivityItem[] = useMemo(() => {
    if (!data || !data.logs) return [];

    return data.logs.map((log: any, index: number) => ({
      date: log.block_timestamp,
      transactionId: log.transaction_hash,
      points: 100,
      type: index % 2 ? "transaction" : "bridged",
    }));
  }, [data]);

  return { loading, error, data: transformedData };
};

export default useLogsQuery;
