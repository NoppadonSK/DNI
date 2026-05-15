import CommonDialog from "../CommonDialog";
import InfoIcon from '@mui/icons-material/Info';
import { lightBlue } from "@mui/material/colors";
const InfoDialog = (props) => (
  <CommonDialog type="info" {...props}
  
  icon={<InfoIcon sx={{ fontSize: 70, color: lightBlue[500] }} />}
  />
);

export default InfoDialog;
