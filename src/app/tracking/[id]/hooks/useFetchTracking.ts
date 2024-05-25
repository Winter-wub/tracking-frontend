"use client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import fetchParcelStatus from "../actions/fetchParcelStatus";

export default function useFetchTracking(trackingNumber: string) {
  const {
    data: queryData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tracking", trackingNumber],
    queryFn: () => fetchParcelStatus(trackingNumber),
  });

  const data = useMemo(() => {
    if (queryData && queryData.data && queryData.status === "success") {
      return queryData.data;
    }
    return null;
  }, [queryData]);

  return {
    data,
    error,
    isLoading,
  };
}
