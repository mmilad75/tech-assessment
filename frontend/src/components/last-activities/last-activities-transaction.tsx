"use client";
import useShortenTxId from "@/hooks/use-shorten-tx-id";
import { IActivityItem } from ".";
import Link from "next/link";
import LinkIcon from "../../assets/icons/link.svg";

type LastActivitiesTransactionProps = Pick<
  IActivityItem,
  "transactionId" | "link"
>;

const LastActivitiesTransaction: React.FC<LastActivitiesTransactionProps> = ({
  transactionId = "",
  link = "",
}) => {
  const shortenTxId = useShortenTxId(transactionId);

  return (
    <div className="flex justify-between">
      <span>
        <span className="text-sm">{shortenTxId}</span>
        <span
          onClick={() => navigator.clipboard.writeText(transactionId)}
          className="ml-3 text-xs text-text-secondary px-3 py-2 bg-elevation-3 rounded-corner cursor-pointer">
          Copy
        </span>
      </span>
      <Link href={link}>
        <LinkIcon />
      </Link>
    </div>
  );
};

export default LastActivitiesTransaction;
