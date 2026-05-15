import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
//import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router,  useLocation,  useNavigate,} from "react-router-dom";

import * as PropTypes from "prop-types";
//import { CssVarsProvider } from '@mui/joy/styles';
import TestJoy from "./joy";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import BadgeIcon from "@mui/icons-material/Badge";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BuildIcon from "@mui/icons-material/Build";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import BarcodeReaderIcon from "@mui/icons-material/BarcodeReader";
import AirplayIcon from "@mui/icons-material/Airplay";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import CustomHeader from "./components/Navbar/CustomHeader";
import Box from "@mui/material/Box";
import Footer from "./components/Footer/Footer";
import ModelBC from "./components/Page/01 Product Parameter Config/Model Basic Config/ModelBC";
import DELLTILHUB from "./components/Page/01 Product Parameter Config/DellTillHUB_PNConfig/DellTilHubPnConfig";
import ModelSeriesConfig from "./components/Page/01 Product Parameter Config/014 Model Series Config/ModelSeriesConfig";
import UnrepairReport from "./components/Page/02 Qaulity Management/UnRepair Report/UnrepairReport";
import RepairOverTimeMaintain from "./components/Page/02 Qaulity Management/01 Repair Overtime Maintain/RepairOverTimeMaintain";
import MistTool from "./components/Page/02 Qaulity Management/02 Mist Tool/MistTool";
import CustomerMasterConfig from "./components/Page/03 Customer Master Config/CustomerMasterConfig";
import MOMaintain from "./components/Page/04 MO Management/01 Mo Maintain/MOMaintain";
import MacMC from "./components/Page/04 MO Management/02 MAC Management/MO MAC Management";
import NALStockin from "./components/Page/04 MO Management/044 NAL Managment/0441 Stock In/StockIn";
import NALApply from "./components/Page/04 MO Management/044 NAL Managment/0442 NAL Apply/NALApply";
import ReportForm from "./components/Page/04 MO Management/03 Barcode System/00 MFG/ReportForm";
import BarcodeForm from "./components/Page/04 MO Management/03 Barcode System/01 Barcode/BarcodeForm";
import QAForm from "./components/Page/04 MO Management/03 Barcode System/03 QC/QCForm";
import Modelsamplingunlock from "./components/Page/02 Qaulity Management/04 Model Sampling Unlock/Model Sampling Unlock";
import FinishedGoodsReport from "./components/Page/06 Report Management/04 Finished Goods Report/Report";
import ManualShipReport from "./components/Page/06 Report Management/05 Manual Ship Report/Main";
import PEForm from "./components/Page/04 MO Management/03 Barcode System/02 PE/PEForm";
import ECNTrial from "./components/Page/09 Process Managment/091 ECN Trial Run Tracking Report/ECNTrial";
import PMO_Reccord from "./components/Page/06 Report Management/02 MO Product Info Reccord/PMO_Reccord";
import ReprintLabelReport from "./components/Page/06 Report Management/03 Label Reprint Report/LabelReprintReport";
import SmartLogisticDelivery from "./components/Page/05 Smart Logistic Delivery/SmartLogisticDelivery";
import AlertNotifyConfig from "./components/Page/07 Alert Configuration/071 Alert Notify Setting/Alert-Notify-Config";
import ModelRepaieOwnerConfig from "./components/Page/01 Product Parameter Config/Model Repair Owner Config/Model-Repair-Owner-Connfig";
import MaterialPNConfig from "./components/Page/01 Product Parameter Config/Material PN Config/MaterialPNConfig";
import BFMACINFO from "./components/Page/04 MO Management/045 BUFFALO MAC Info/BUFFALOMAC";
import Breadcrumb from "./components/Page/Breadcrumb";
import IPQCRecordPage from "./components/Page/02 Qaulity Management/03 IPQC Reccord/utils/IPQCRecordPage";
import ModuleConfig from "./components/Page/08 System Config/081 Module Validation Config/ModuleConfig";
import SmartMaterial from "./components/Page/09 Process Managment/092 Smart Material Tracking/SmartMaterial";
import FlowCodeConfig from "./components/Page/11 Auto Creat SN/01 Flow Code Config/FlowCodeConfig";
import SNRuleNameConfig from "./components/Page/11 Auto Creat SN/02 SN Rule Name Config/SNRuleNameConfig";
import UserAccountConfig from "./components/Page/08 System Config/082 User Account Config/UserAccountConfig"
import HIRouterWIPReport from "./components/Page/06 Report Management/06  HI ROUTER WIP Report/HIRouterWipReport"
import LineConfig from "./components/Page/08 System Config/083 Line Config/LineConfig"
import StationConfig from "./components/Page/08 System Config/084 Station Config/StationConfig"
import SNRuleDefineConfig from "./components/Page/11 Auto Creat SN/03  SN Rule Define Config/SNRuleDefineConfig"
import ModelSNConfig from "./components/Page/11 Auto Creat SN/04 Model SN Config/ModelSNConfig"
import AutoCreatSN from "./components/Page//04 MO Management/046 Auto Craet SN/AutoCreatSN"
import WBCBomNameConfig from "./components/Page/01 Product Parameter Config/015 Wlan Bom Maintain/01 WBC_BOM_NAME/BomNameConfig"
import WBCBomItemConfig from "./components/Page/01 Product Parameter Config/015 Wlan Bom Maintain/02 WBC_BOM_ITEM_CONFIG/BomItemConfig"
import WBCBomModelConfig from "./components/Page/01 Product Parameter Config/015 Wlan Bom Maintain/03 WBC_BOM_MODEL_CONFIG/ModelBomConfig"
import CallBC from "./components/Page/12 Call Barcode System/BCcall/index"
import { AuthProvider, AuthContext } from "./AuthContext";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { green } from "@mui/material/colors";

const demoThemeOptions = {
  colorSchemes: { light: true, dark: false },
};

const demoTheme = createTheme(demoThemeOptions);

/* =======================  Content ตาม pathname  ======================= */

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
 const hasOpenedRef = useRef(false); // ✅ กัน trigger ซ้ำ

  useEffect(() => {
    if (pathname === "/quality-management/repair-dashboard") {
      if (!hasOpenedRef.current) {
        hasOpenedRef.current = true;
        window.open("https://sfis-repair-db.deltaww.com:5004", "_blank");
        navigate("/home");
      }
    } else {
      hasOpenedRef.current = false;
      navigate(pathname, { replace: true });
    }
  }, [pathname, navigate]);

  let content;

  if (pathname === "/system-config/user-account-config") {
    content = <UserAccountConfig />;
  } else if (pathname === "/product-parameter-config/model-basic-config") {
    content = <ModelBC />;
    } else if (pathname === "/barcode-system") {
    content = <CallBC />;
    } else if (pathname === "/product-parameter-config/wlan-bom-maintain/wbc-bom-name-config") {
    content = <WBCBomNameConfig />;
    } else if (pathname === "/product-parameter-config/wlan-bom-maintain/wbc-bom-item-config") {
    content = <WBCBomItemConfig />;
    } else if (pathname === "/product-parameter-config/wlan-bom-maintain/wbc-bom-model-config") {
    content = <WBCBomModelConfig />;
  } else if (pathname === "/system-config/module-validation-config") {
    content = <ModuleConfig />;
  } else if ( pathname === "/product-parameter-config/model-repair-owner-config"
  ) {    content = <ModelRepaieOwnerConfig />;
  } else if (pathname === "/product-parameter-config/material-pn-config") {
    content = <MaterialPNConfig />;
  } else if (pathname === "/product-parameter-config/model-series-config") {
    content = <ModelSeriesConfig />;
  } else if (pathname === "/product-parameter-config/dell-til-hub-pn-config") {
    content = <DELLTILHUB />;
  } else if (pathname === "/quality-management/unrepair-report") {
    content = <UnrepairReport />;
  } else if (pathname === "/quality-management/repair-overtime-maintain") {
    content = <RepairOverTimeMaintain />;
  } else if (pathname === "/quality-management/mist-tool") {
    content = <MistTool />;
  } else if (pathname === "/quality-management/ipqc-reccord") {
    content = <IPQCRecordPage />;
  } else if (pathname === "/process-management/ecn-tracking-report") {
    content = <ECNTrial />;
  } else if (pathname === "/auto-creat-sn/flowcode-config") {
    content = <FlowCodeConfig />;
  } else if (pathname === "/auto-creat-sn/sn-rule-name-config") {
    content = <SNRuleNameConfig />;
     } else if (pathname === "/auto-creat-sn/model-sn-config") {
    content = <ModelSNConfig />;
     } else if (pathname === "/auto-creat-sn/sn-rule-define-config") {
    content = <SNRuleDefineConfig />;
     } else if (pathname === "/mo-management/auto-creat-sn") {
      content = <AutoCreatSN/>;     
  } else if (pathname === "/process-management/smart-material-tracking") {
    content = <SmartMaterial />;
  } else if (pathname === "/report-management/mo-production-record") {
    content = <PMO_Reccord />;
  } else if (pathname === "/report-management/reprint-label-report") {
    content = <ReprintLabelReport />;
  } else if (pathname === "/report-management/finish-goods-report") {
    content = <FinishedGoodsReport />;
    } else if (pathname === "/report-management/hi-router-wip-report") {
    content = <HIRouterWIPReport />;
  } else if (pathname === "/report-management/manual-ship-report") {
    content = <ManualShipReport />;
  } else if (pathname === "/customer-para-config/customer-config") {
    content = <CustomerMasterConfig />;
  } else if (pathname === "/customer-para-config/analytic") {
    content = <Home />;
  } else if (pathname === "/mo-management/mo-bom-maintain") {
    content = <MOMaintain />;
  } else if (pathname === "/mo-management/mac-management") {
    content = <MacMC />;
  } else if (pathname === "/mo-management/wlan-barcode-system/barcode-report") {
    content = <ReportForm />;
  } else if (pathname === "/mo-management/wlan-barcode-system/barcode-form") {
    content = <BarcodeForm />;
  } else if (pathname === "/mo-management/wlan-barcode-system/qa-form") {
    content = <QAForm />;
  } else if (pathname === "/mo-management/wlan-barcode-system/pe-form") {
    content = <PEForm />;
  } else if (pathname === "/quality-management/model-sampling-unlock") {
    content = <Modelsamplingunlock />;
  } else if (pathname === "/mo-management/nal-label-management/nal-stock-in") {
    content = <NALStockin />;
  } else if (pathname === "/mo-management/nal-label-management/nal-apply") {
    content = <NALApply />;
  } else if (pathname === "/mo-management/buffalo-mac-info") {
    content = <BFMACINFO />;
  } else if (pathname === "/alert-configuration/alert-notify-setting") {
    content = <AlertNotifyConfig />;
  } else if (pathname === "/smart-logistic-delivery") {
    content = <SmartLogisticDelivery />;
  } else if (pathname === "/login") {
    content = <Login />;
  } else if (pathname === "/system-config/line-config") {
    content = <LineConfig/>;
 
  } else if (pathname === "/system-config/station-config"){
  content = <StationConfig/> ;
  } else {    content = <Home />;  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          width: "100%",
        }}
      >
        {content}
      </Box>
    </LocalizationProvider>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

/* =======================  Header ของ content (Breadcrumb อย่างเดียว)  ======================= */

function PageHeader({ breadcrumbMap }) {
  return <Breadcrumb breadcrumbMap={breadcrumbMap} />;




}

/* =======================  App หลัก  ======================= */



  function App({ window }) {
  const demoWindow = window !== undefined ? window : undefined;
   const [menuSearch, setMenuSearch] = useState("");
  const { isAuthenticated, roleName } = useContext(AuthContext); // Check authentication status
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login"; // Check if on the login page
  /* =======================  Helper: แปลง navigation เป็น list path ที่อนุญาต  ======================= */

const collectPathsFromNavigation = (items, parentSegments = []) => {
  let paths = [];

  items.forEach((item) => {
    if (!item.segment) return;

    const currentSegments = [...parentSegments, item.segment];
    const currentPath = "/" + currentSegments.join("/");

    // เก็บ path ของตัวเอง
    paths.push(currentPath);

    // ถ้ามี children ก็เก็บ path ลูกต่อ
    if (item.children && item.children.length > 0) {
      paths = paths.concat(
        collectPathsFromNavigation(item.children, currentSegments)
      );
    }
  });

  return paths;
};


  // 🟢 ถ้าเปิดที่ "/" ให้ redirect ไป /home
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [location.pathname, navigate]);

  // 🟢 Router adapter ให้ Toolpad ใช้ร่วมกับ React Router
  const router = useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    }),
    [location, navigate]
  );


  const breadcrumbMap = {
    "wlan-bom-maintain":"WLAN BOM Maintain",
    "barcode-system": "Barcode System",
    "wbc-bom-name-config":"WBC BOM Name Config",
    "wbc-bom-item-config":"WBC BOM Item Config",
    "wbc-bom-model-config":"WBC BOM Model Config",
    "auto-creat-sn": "Auto Creat SN",
    "sn-rule-define-config": "SN Rule Define Config",
    "flowcode-config": "Flow Code Config",
    "systrm-config": "System Config",
    "module-validation-config": "Module Validation Config",
    "user-account-config": "User Account Config",
    "product-parameter-config": "Product Parameter Config",
    "model-basic-config": "Model Basic Config",
    "sn-rule-name-config": "SN Rule Name Config",
    "dell-til-hub-pn-config": "DELL TIL HUB PN Config",
    "model-repair-owner-config": "Model Repair Owner Config",
    "quality-management": "Quality Management",
    "repair-overtime-maintain": "Repair OverTime Maintain",
    "unrepair-report": "Unrepair Report",
    "repair-dashboard": "Repair Dashboard",
    "customer-para-config": "Customer Para Config",
    "customer-config": "Customer Config",
    "mist-tool": "MIST TOOL",
    "hi-router-wip-report": "HI Router WIP Report",
    "material-pn-config": "Material PN Config",
    "buffalo-mac-info": "BUFFALO MAC Info",
    "model-series-config": "Model Series Config",
    analytic: "Analytic",
    "reprint-label-report": "Reprint Label report",
    "model-sampling-unlock": "Model Sampling Unlock",
    "smart-material-tracking": "Smart Material Tracking",
    "model-sn-config":"Model SN Config",
    "ipqc-reccord": "IPQC Reccord",
    "mo-management": "MO Management",
    "nal-apply": "NAL APPLY",
    "nal-stock-in": "NAL Stock In",
    "nal-label-management": "NAL Label Managemet",
    "mo-bom-maintain": "Mo BOM Maintain",
    "report-management": "Report Management",
    "process-management": "Process Management",
    "manual-ship-report": "Manual Ship Report",
    "ecn-tracking-report": "ECN Tracking Report",
    "mo-production-record": "MO Production Record",
    "mac-management": "MAC Management",
    "wlan-barcode-system": "WLAN Barcode System",
    "alert-configuration": "Alert Configuration",
    "alert-notify-setting": "Alert Notify Setting",
    "barcode-report": "Barcode Report",
    "barcode-form": "Barcode Form",
    "qa-form": "QA Check Data",
    "pe-form": "PE Check Data",
    "smart-logistic-delivery": "Smart Logistic Delivery",
    "finish-goods-report": "Finish Goods Report",
    "line-config": "Line Config",
    "station-config": "Station Config",
    "system-config": "System Config",
    login: "Login",
    home: "Home",
  };

  // helper: check role
  const showForRoles = (allowedRoles, item) =>
    allowedRoles.includes(roleName) ? [item] : [];

  /* --------- navigation หลัก (core) --------- */

  const baseNavigation = useMemo(
    () => [

      ...showForRoles(["ADMIN"], {
        segment: "system-config",
        title: "System Config",
        icon: <SettingsApplicationsIcon sx={{ fontSize: "18px" }} />,
        children: [
          { segment: "user-account-config",
        title: "User Account Config",
        icon: <BadgeIcon sx={{ fontSize: "18px" }} />,},
          {
            segment: "module-validation-config",
            title: "Module Validation Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "line-config",
            title :"Line Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px"}}/>,
          },
          {
            segment:"station-config",
            title: "Station Config",
            icon: <DescriptionIcon sx= {{ fontSize : "18px"}}/>,
          }
      
        ],
      }),


      ...showForRoles(["ADMIN", "PE", "BC", "Sales", "MFG", "QC"], {
        segment: "product-parameter-config",
        title: "Product Parameter Config",
        icon: <CategoryIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "model-basic-config",
            title: "Model Basic Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "model-series-config",
            title: "Model Series Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          
          {
            segment: "dell-til-hub-pn-config",
            title: "DELL TIL HUB PN Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "model-repair-owner-config",
            title: "Model Repair Owner Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "material-pn-config",
            title: "Metarial PN Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
           {
            segment: "wlan-bom-maintain",
            title: "WLAN BOM Maintain",
            icon: <BarcodeReaderIcon sx={{ fontSize: "18px" }} />,
            children: [
              {
                segment: "wbc-bom-name-config",
                title: "WBC BOM Name Config",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              },
              ...showForRoles(["ADMIN", "BC"], {
                segment: "wbc-bom-item-config",
                title: "WBC BOM Item Config",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
              ...showForRoles(["ADMIN", "BC"], {
                segment: "wbc-bom-model-config",
                title: "WBC BOM Model Config",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
              
            ],
          },
        ],
      }),




      {
        segment: "quality-management",
        title: "Quality Management",
        icon: <EqualizerIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "unrepair-report",
            title: "Unrepair Report",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "repair-dashboard",
            title: "Repair Dashboard",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "repair-overtime-maintain",
            title: "Repair Overtime Maintain",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "mist-tool",
            title: "MIST TOOL",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "ipqc-reccord",
            title: "IPQC Reccord",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "model-sampling-unlock",
            title: "Model Sampling Unlock",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
        ],
      },
            {
        segment: "barcode-system",
        title: "Barcode System",
        icon: <EqualizerIcon sx={{ fontSize: "18px" }} />,
        
      },
            ...showForRoles(["ADMIN"], {
        segment: "auto-creat-sn",
        title: "Auto Creat SN Config",
        icon: <AutoAwesomeMosaicIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "flowcode-config",
            title: "Flow Code Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "sn-rule-name-config",
            title: "SN Rule Name Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "sn-rule-define-config",
            title:"SN Rule Define Config",
            icon:<DescriptionIcon sx  ={{ fontSize: "18px"}} />,
          },
          {
            segment: "model-sn-config",
            title:"Model SN Config",
            icon:<DescriptionIcon sx  ={{ fontSize: "18px"}} />,
          }
        ],
      }),


      ...showForRoles(["ADMIN", "PE", "BC"], {
        segment: "customer-para-config",
        title: "Customer Para Config",
        icon: <PeopleAltIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "customer-config",
            title: "Customer Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "analytic",
            title: "Analytic",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
        ],
      }),

      {     segment: "mo-management",
        title: "MO Management",
        icon: <BuildIcon sx={{ fontSize: "18px" }} />,
        children: [
          ...showForRoles(["ADMIN", "PE","MFG"], {
            segment: "mo-bom-maintain",
            title: "Mo BOM Maintain",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          }),
          ...showForRoles(["ADMIN", "PE", "QC", "MC"], {
            segment: "mac-management",
            title: "MAC Management",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          }),
           ...showForRoles(["ADMIN", "BC"], {
            segment: "auto-creat-sn",
            title: "Auto Creat SN",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          }),
          ...showForRoles(["ADMIN", "PE", "QC", "MC", "BC"], {
            segment: "buffalo-mac-info",
            title: "BUFFALO MAC INfo",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          }),
          {
            segment: "wlan-barcode-system",
            title: "WLAN Barcode System",
            icon: <BarcodeReaderIcon sx={{ fontSize: "18px" }} />,
            children: [
              {
                segment: "barcode-report",
                title: "Barcode Report",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              },
              ...showForRoles(["ADMIN", "BC"], {
                segment: "barcode-form",
                title: "Barcode Form",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
              ...showForRoles(["ADMIN", "QC"], {
                segment: "qa-form",
                title: "QA Check Data",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
              ...showForRoles(["ADMIN", "PE"], {
                segment: "pe-form",
                title: "PE Check Data",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
            ],
          },

          {
            segment: "nal-label-management",
            title: "NAL Label Management",
            icon: <AirplayIcon sx={{ fontSize: "18px" }} />,
            children: [
              {
                segment: "nal-stock-in",
                title: "NAL Stock In",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              },
              ...showForRoles(["ADMIN", "BC", "QC", "MC", "PE", "PC", "MFG"], {
                segment: "nal-apply",
                title: "NAL Apply",
                icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
              }),
            ],
          },
        ],
      },

      ...showForRoles(
        [
          "ADMIN",
          "PE",
          "QC",
          "PC",
          "MFG",
          "TE",
          "SMT",
          "OP",
          "BC",
          "MC",
          "Sales",
          "WH",
        ],
        {
          segment: "report-management",
          title: "Report Management",
          icon: <ListAltIcon sx={{ fontSize: "18px" }} />,
          children: [
             {
              segment: "hi-router-wip-report",
              title: "HI Router WIP Report",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
            {
              segment: "mo-production-record",
              title: "MO Production Record",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
            {
              segment: "reprint-label-report",
              title: "Reprint Label Report",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
            {
              segment: "finish-goods-report",
              title: "Finish Goods Report",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
            ...showForRoles(["ADMIN", "WH"], {
              segment: "manual-ship-report",
              title: "Manual Ship Report",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            }),
          ],
        }
      ),

      ...showForRoles(
        [
          "ADMIN",
          "PE",
          "QC",
          "PC",
          "MFG",
          "TE",
          "SMT",
          "OP",
          "BC",
          "MC",
          "Sales",
          "WH",
        ],
        {
          segment: "process-management",
          title: "Process Management",
          icon: <AssignmentTurnedInIcon sx={{ fontSize: "18px" }} />,
          children: [
            {
              segment: "ecn-tracking-report",
              title: "ECN Trial Run Tracing",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
            {
              segment: "smart-material-tracking",
              title: "Smart Material tracking",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
          ],
        }
      ),

      ...showForRoles(
        [
          "ADMIN",
          "PE",
          "QC",
          "PC",
          "MFG",
          "TE",
          "SMT",
          "OP",
          "BC",
          "MC",
          "Sales",
        ],
        {
          segment: "alert-configuration",
          title: "Alert Configuration",
          icon: <ContactMailRoundedIcon sx={{ fontSize: "18px" }} />,
          children: [
            {
              segment: "alert-notify-setting",
              title: "Alert Notify Setting",
              icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
            },
          ],
        }
      ),

      ...showForRoles(["ADMIN",
          "PE",
          "QC",
          "PC",
          "MFG",
          "TE",
          "SMT",
          "OP",
          "BC",
          "MC",
          "Sales",
          "WH",], {
        segment: "smart-logistic-delivery",
        title: "Smart Logistic Delivery",
        icon: <LocalShippingIcon sx={{ fontSize: "20px" }} />,
      }),
    ],
    [roleName]
  );

    // 🟢 path ที่ role ปัจจุบัน "มีสิทธิ์เข้า"
  const allowedPaths = useMemo(() => {
    const pathsFromNav = collectPathsFromNavigation(baseNavigation);

    // หน้า public ที่ให้ทุก role เข้าได้
    const alwaysAllowed = ["/", "/home", "/login"];

    return Array.from(new Set([...alwaysAllowed, ...pathsFromNav]));
  }, [baseNavigation]);


  /* --------- filter navigation ด้วย Search --------- */

const filteredCoreNavigation = useMemo(() => {
  const query = menuSearch.trim().toLowerCase();
  if (!query) return baseNavigation;

  const filterItems = (items) =>
    items
      .map((item) => {
        const title = (item.title || "").toLowerCase();
        const selfMatch = title.includes(query);

        let filteredChildren = [];
        if (item.children && item.children.length > 0) {
          filteredChildren = filterItems(item.children);
        }

        // 1) ถ้า parent ชื่อตรงเอง และไม่มีลูกที่ตรง → โชว์ทั้งก้อนเดิม
        if (selfMatch && filteredChildren.length === 0) {
          return item; // ใช้ object เดิม
        }

        // 2) ถ้า parent ชื่อตรง และมีลูกที่ตรง → โชว์ parent + ลูกที่ตรง
        if (selfMatch && filteredChildren.length > 0) {
          return { ...item, children: filteredChildren };
        }

        // 3) parent ไม่ตรง แต่มีลูกที่ตรง → โชว์ parent + ลูกที่ตรง
        if (!selfMatch && filteredChildren.length > 0) {
          return { ...item, children: filteredChildren };
        }

        // 4) ทั้ง parent และลูกไม่ตรง → ไม่แสดง
        return null;
      })
      .filter(Boolean);

  return filterItems(baseNavigation);
}, [menuSearch, baseNavigation]);



  /* --------- navigation สุดท้าย = Search box + เมนูที่กรองแล้ว --------- */

  const navigation = useMemo(
    () => [
      {
        kind: "header",
        
        title: (
       <Box  sx={{
  
            maxWidth: 200, 
              
            bgcolor: "#1e88e5",     // 🔵 พื้นหลังสีน้ำเงิน (เปลี่ยนโค้ดสีได้)
          }}  >
            <TextField
    size="small"
    placeholder="Search Menu"
    value={menuSearch}
    onChange={(e) => setMenuSearch(e.target.value)}
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      ),
    }}
    sx={{
      maxWidth: 240,          // ✅ จำกัดความกว้างของกล่อง search เอง
      backgroundColor: "white",
      borderRadius: 1,
      "& .MuiOutlinedInput-root": {
        borderRadius: 1,
      },
      "& .MuiSvgIcon-root": {
        color: "#7f8c8d",
      },
    }}
  />

</Box>

        ),
      },
      ...filteredCoreNavigation,
    ],
    [filteredCoreNavigation, menuSearch]
  );

 /* --------- redirect ถ้าไม่ login --------- */

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      navigate("/login", {
        replace: true,
        state: { from: location }, // จำ path เดิมไว้
      });
    }
  }, [isAuthenticated, isLoginPage, location, navigate]);

  /* --------- ถ้า login แล้วแต่ไม่มีสิทธิ์เข้า path นั้น → redirect กลับ /home --------- */

  useEffect(() => {
    // ถ้ายังไม่ได้ login ไม่ต้องเช็คสิทธิ์ (ปล่อยให้ useEffect ด้านบนจัดการ)
    if (!isAuthenticated) return;

    const fullPath = location.pathname || "/";
    const cleanPath = fullPath.split("?")[0]; // ตัด query string ทิ้งเผื่อมี

    if (!allowedPaths.includes(cleanPath)) {
      console.warn("Forbidden path for role", roleName, cleanPath);

      navigate("/home", {
        replace: true,
        state: { forbidden: cleanPath },
      });
    }
  }, [isAuthenticated, location.pathname, allowedPaths, navigate, roleName]);


  /* --------- main layout --------- */

  return (
    <AppProvider
      branding={{ title: "SFIS-BC SYSTEM" }}
      navigation={navigation} // <-- มี Search เป็น item แรกใน navigation
      router={router}
      theme={demoTheme}
      window={demoWindow}
      sx
    >
      <div className="App">
        {isLoginPage ? (
          <Login />
        ) : (
          <>
            <CustomHeader />
            <DashboardLayout>
              {/* หัว content: Breadcrumb อย่างเดียว */}
              <PageHeader breadcrumbMap={breadcrumbMap} />

              {/* เนื้อหาหน้า */}
              <DemoPageContent pathname={router.pathname} />
              <Footer />
            </DashboardLayout>
          </>
        )}
      </div>
    </AppProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
