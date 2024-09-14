"use client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

interface IApolloClientProviderProps {
  children: React.ReactNode;
}

const ApolloClientProvider: React.FC<IApolloClientProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
