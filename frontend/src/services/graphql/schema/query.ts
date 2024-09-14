import { gql } from "@apollo/client";

export const GET_LOGS_QUERY = gql`
  query MyQuery {
    logs(limit: 5, order_by: { block_timestamp: desc }) {
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
