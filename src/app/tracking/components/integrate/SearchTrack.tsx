"use client";
import TrackForm from "@/app/tracking/components/assemble/TrackForm";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function SearchTrackIntegrate() {
  const navigate = useRouter();
  const handleSubmitTrackNumber = useCallback(
    (values: { trackingNumber: string }) => {
      navigate.push(`/tracking/${values.trackingNumber}`);
    },
    [navigate]
  );
  return <TrackForm onSubmit={handleSubmitTrackNumber} />;
}
