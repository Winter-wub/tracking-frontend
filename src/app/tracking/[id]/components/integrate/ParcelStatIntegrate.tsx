"use client";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Skeleton } from "@mui/material";
import dayjs from "dayjs";
import useFetchTracking from "../../hooks/useFetchTracking";
import StatusParcel from "../combine/StatusIcon";
import StatusLabel from "../combine/StatusLabel";

type Props = {
  trackingNumber: string;
};

export default function ParcelStatIntegrate({ trackingNumber }: Props) {
  const { data, error, isLoading } = useFetchTracking(trackingNumber);

  if (isLoading)
    return (
      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Box
            key={index}
            display="flex"
            gap={1.25}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              gap={0.2}
              display="flex"
              flexDirection="column"
              alignItems="end"
            >
              <Skeleton variant="rectangular" width={150} />
              <Skeleton variant="rectangular" width={170} />
              <Skeleton variant="rectangular" width={90} />
            </Box>
            <Skeleton variant="circular" height={50} width={50} />
            <Skeleton variant="rectangular" width={120} height={120} />
          </Box>
        ))}
      </Box>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <Timeline position="alternate">
      {data.history.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            align="right"
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {dayjs(item.createdAt).format("DD/MM/YYYY HH:mm")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            {index === 0 ? <Box height="15px"></Box> : <TimelineConnector />}
            <StatusParcel status={item.status} />
            {index === data.history.length - 1 ? (
              <Box height="15px"></Box>
            ) : (
              <TimelineConnector />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <StatusLabel status={item.status} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
