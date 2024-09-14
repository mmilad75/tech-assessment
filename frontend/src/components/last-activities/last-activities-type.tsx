import { useMemo } from "react";
import TransactionIcon from "@/assets/icons/transaction.svg";
import BridgedIcon from "@/assets/icons/bridge.svg";
import { IActivityItem } from ".";

const LastActivitiesType: React.FC<IActivityItem> = ({ type }) => {
  const Icon = useMemo(
    () => (type === "transaction" ? TransactionIcon : BridgedIcon),
    [type]
  );
  return (
    <div className="flex items-center">
      <Icon />
      <span className="ml-2 text-sm">
        {type === "transaction" ? "Transaction" : "Bridged"}
      </span>
    </div>
  );
};

export default LastActivitiesType;
