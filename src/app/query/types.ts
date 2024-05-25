export type QueryResponse<T> = {
  data?: T;
  status: "success" | "error";
  error?: string | null;
};
