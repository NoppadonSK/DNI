import CommonDialog from "../CommonDialog";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from "@mui/material/colors";

const SuccessDialog = ({ open, title, message, onClose }) => {
  return (
    <CommonDialog
      type="success"
    color="success"
      open={open}
      title={title}
      message={message}
      onClose={onClose}
      icon={<CheckCircleIcon sx={{ fontSize: 70, color: green[500] }} />}
    />
  );
};

export default SuccessDialog;
