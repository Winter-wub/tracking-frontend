"use server";

import { Box, Typography } from "@mui/material";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import fetchParcelStatus from "./actions/fetchParcelStatus";
import ParcelStatIntegrate from "./components/integrate/ParcelStatIntegrate";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tracking", params.id],
    queryFn: () => fetchParcelStatus(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          flexWrap="wrap"
        >
          <Typography variant="h6" noWrap>
            ติดตามพัสดุหมายเลข:
          </Typography>
          <Typography variant="h4" noWrap>
            {params.id}
          </Typography>
        </Box>

        <ParcelStatIntegrate trackingNumber={params.id} />
      </Box>
    </HydrationBoundary>
  );
}
