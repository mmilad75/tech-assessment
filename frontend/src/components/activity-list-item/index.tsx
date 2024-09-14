"use client";
import useShortenTxId from "@/hooks/use-shorten-tx-id";
import useTimeDate from "@/hooks/use-time-date";
import Link from "next/link";
import TransactionIcon from "../../assets/icons/transaction.svg";
import BridgedIcon from "../../assets/icons/bridge.svg";
import LinkIcon from "../../assets/icons/link.svg";
import { useMemo } from "react";
import clsx from "clsx";
import Column from "./column";

export interface IActivityListItemProps {
  type: "transaction" | "bridged" | "header";
  point?: string | number;
  date?: string;
  transactionId?: string;
  link?: string;
  odd?: boolean;
  lastItem?: boolean;
}

const ActivityListItem: React.FC<IActivityListItemProps> = ({
  type = "transaction",
  point = "",
  date = "",
  transactionId = "",
  link = "",
  odd = true,
  lastItem = false,
}) => {
  const { formattedDate, formattedTime } = useTimeDate(date);
  const shortenTxId = useShortenTxId(transactionId);

  const Icon = useMemo(
    () => (type === "transaction" ? TransactionIcon : BridgedIcon),
    [type]
  );
  const bgColor = useMemo(
    () => (odd ? "bg-elevation-2" : "bg-elevation-1"),
    [odd]
  );

  if (type === "header") {
    return (
      <div
        className={clsx(
          "flex w-[1216px] items-center h-[44px] border-b-[1px] border-elevation-1",
          bgColor,
          "rounded-t-lg"
        )}
      >
        <Column className="w-[331px]">
          <span className="text-xs text-text-secondary">Activities</span>
        </Column>
        <Column className="w-[280px]">
          <span className="text-xs text-text-secondary">Points</span>
        </Column>
        <Column className="w-[339px]">
          <span className="text-xs text-text-secondary">Date</span>
        </Column>
        <Column className="w-[266px] justify-between">
          <span className="text-xs text-text-secondary">TXID</span>
        </Column>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex w-[1216px] items-center h-[64px] border-b-[1px] border-elevation-1",
        bgColor,
        lastItem && "rounded-b-lg"
      )}
    >
      <Column className="w-[331px]">
        <Icon />
        <span className="ml-2 text-sm">
          {type === "transaction" ? "Transaction" : "Bridged"}
        </span>
      </Column>
      <Column className="w-[280px]">
        <span className="bg-success-elevation1 rounded-corner px-3 py-2 text-success text-xs">
          +{point}
        </span>
      </Column>
      <Column className="w-[339px]">
        <span className="text-sm">{formattedDate}</span>
        <span className="ml-2 text-xs text-text-secondary px-3 py-2 bg-elevation-3 rounded-corner">
          {formattedTime}
        </span>
      </Column>
      <Column className="w-[266px] justify-between">
        <span>
          <span className="text-sm">{shortenTxId}</span>
          <span
            onClick={() => navigator.clipboard.writeText(transactionId)}
            className="ml-3 text-xs text-text-secondary px-3 py-2 bg-elevation-3 rounded-corner cursor-pointer"
          >
            Copy
          </span>
        </span>
        <Link href={link}>
          <LinkIcon />
        </Link>
      </Column>
    </div>
  );
};

export default ActivityListItem;
