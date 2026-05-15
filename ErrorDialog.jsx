import CommonDialog from "../CommonDialog";
import ErrorIcon from "@mui/icons-material/Error";
import { red } from "@mui/material/colors";

const ErrorDialog = ({ open, title, message, onClose }) => {
  return (
    <CommonDialog
      type="error"
      open={open}
      title={title}
      message={message}
      onClose={onClose}
      icon={<ErrorIcon sx={{ fontSize: 70, color: red[500] }} />} // ไอคอนใหญ่ สีแดง
      sx={{  padding: 1 }}
    />
  );
};

export default ErrorDialog;
