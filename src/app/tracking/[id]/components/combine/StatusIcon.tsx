import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { TimelineDot } from "@mui/lab";
import { Status } from "../../types/parcel";
type Props = {
  status: Status;
};
export default function StatusParcel({ status }: Props) {
  switch (status) {
    case Status.InTransit:
      return (
        <TimelineDot color="primary">
          <LocalShippingIcon />
        </TimelineDot>
      );
    case Status.Delivered:
      return (
        <TimelineDot color="success">
          <CheckCircleIcon />
        </TimelineDot>
      );
    case Status.Exception:
      return (
        <TimelineDot color="error">
          <ErrorIcon />
        </TimelineDot>
      );
    default:
      return <div>Unknown status</div>;
  }
}
