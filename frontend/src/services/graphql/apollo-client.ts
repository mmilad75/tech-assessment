"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { BASE_URL } from "./config";

const httpLink = new HttpLink({
  uri: BASE_URL,
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
