import SearchTrackIntegrate from "@/app/tracking/components/integrate/SearchTrack";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box>
      <Box textAlign="center">
        <LocalShippingIcon fontSize="large" color="primary" />
      </Box>
      <Typography variant="h6" noWrap textAlign="center">
        ตรวจสอบสถานะพัสดุ
      </Typography>
      <SearchTrackIntegrate />
    </Box>
  );
}
