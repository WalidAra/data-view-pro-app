/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type Fetch = {
  endPoint?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};

export type FetchResponse = {
  status: boolean;
  message: string;
  data: any;
};

export type Provider = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
};

export type Database = {
  id: string;
  createdAt: string;
  description: string;
  name: string;
  size: string;
  tableCount: string;
  title: string;
  type: string;
};

export type DatabaseInfo = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  size: string;
  tableCount: string;
  tables: string[];
  title: string;
  type: string;
};
