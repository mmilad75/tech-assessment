import { gql } from "@apollo/client";

export const LOGS_QUERY_LIMIT = 5;

export const GET_LOGS_QUERY = gql`
  query MyQuery {
    logs(limit: ${LOGS_QUERY_LIMIT}, order_by: { block_timestamp: desc }) {
      address
      block_number
      block_timestamp
      decoded
      from
      transaction_hash
      to
    }
  }
`;
