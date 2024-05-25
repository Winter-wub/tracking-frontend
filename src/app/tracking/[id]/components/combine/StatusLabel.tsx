import { Typography } from "@mui/material";
import React from "react";
import type { Status } from "../../types/parcel";

type Props = {
  status: Status;
};
export default function StatusLabel({ status }: Props) {
  return (
    <Typography variant="h6" component="span">
      {
        {
          InTransit: "กำลังขนส่ง",
          Delivered: "จัดส่งแล้ว",
          Exception: "มีปัญหา",
        }[status]
      }
    </Typography>
  );
}
