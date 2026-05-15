import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CommonDialog = ({
  open,
  onClose,
  onConfirm, // ✅ เพิ่ม
  title,
  message,
  icon,
  type = "info",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          minWidth: 300,
          maxWidth: 600,
          width: "100%",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 8, zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ textAlign: "center", pt: 1 }}>
        <Box sx={{ mb: 2 }}>{icon}</Box>

        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>

        <Typography>{message}</Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "flex-end", pr: 1, pb: 1 }}>
        {type === "info" ? (
          <>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={() => {
                if (onConfirm) onConfirm(); // ✅ เรียกฟังก์ชัน Confirm
              }}
              variant="contained"
              color="primary"
            >
              OK
            </Button>
          </>
        ) : (
          <Button onClick={onClose} variant="contained">
            OK
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};


export default CommonDialog;
