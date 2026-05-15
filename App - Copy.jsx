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
import UserAC from "./components/Page/00 User Account Config/UserAC";
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
import SmartMeterial from "./components/Page/09 Process Managment/092 Smart Material Tracking/SmartMaterial";
import FlowCodeConfig from "./components/Page/11 Auto Creat SN/01 Flow Code Config/FlowCodeConfig";
import SNRuleNameConfig from "./components/Page/11 Auto Creat SN/02 SN Rule Name Config/SNRuleNameConfig";
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

  if (pathname === "/user-account-config") {
    content = <UserAC />;
  } else if (pathname === "/product-parameter-config/model-basic-config") {
    content = <ModelBC />;
  } else if (pathname === "/system-config/module-validation-config") {
    content = <ModuleConfig />;
  } else if (    pathname === "/product-parameter-config/model-repair-owner-config"
  ) {    content = <ModelRepaieOwnerConfig />;
  } else if (pathname === "/product-parameter-config/meterial-pn-config") {
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
  } else if (pathname === "/process-management/smart-material-tracking") {
    content = <SmartMeterial />;
  } else if (pathname === "/report-management/mo-production-record") {
    content = <PMO_Reccord />;
  } else if (pathname === "/report-management/reprint-label-report") {
    content = <ReprintLabelReport />;
  } else if (pathname === "/report-management/finish-goods-report") {
    content = <FinishedGoodsReport />;
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
    "auto-creat-sn": "Auto Creat SN",
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
    "meterial-pn-config": "Meterial PN Config",
    "buffalo-mac-info": "BUFFALO MAC Info",
    "model-series-config": "Model Series Config",
    analytic: "Analytic",
    "reprint-label-report": "Reprint Label report",
    "model-sampling-unlock": "Model Sampling Unlock",
    "smart-material-tracking": "Smart Material Tracking",
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
        segment: "user-account-config",
        title: "User Account Config",
        icon: <BadgeIcon sx={{ fontSize: "18px" }} />,
      }),

      ...showForRoles(["ADMIN"], {
        segment: "system-config",
        title: "System Config",
        icon: <SettingsApplicationsIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "module-validation-config",
            title: "Module Validation Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
        ],
      }),

      ...showForRoles(["ADMIN"], {
        segment: "auto-creat-sn",
        title: "Auto Creat SN",
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
        ],
      }),

      ...showForRoles(["ADMIN", "PE", "BC", "Sales", "MFG", "QC"], {
        segment: "product-parameter-config",
        title: "Product Parameter Config",
        icon: <CategoryIcon sx={{ fontSize: "18px" }} />,
        children: [
          {
            segment: "model-series-config",
            title: "Model Series Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          },
          {
            segment: "model-basic-config",
            title: "Model Basic Config",
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
            segment: "meterial-pn-config",
            title: "Meterial PN Config",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
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

      {
        segment: "mo-management",
        title: "MO Management",
        icon: <BuildIcon sx={{ fontSize: "18px" }} />,
        children: [
          ...showForRoles(["ADMIN", "PE"], {
            segment: "mo-bom-maintain",
            title: "Mo BOM Maintain",
            icon: <DescriptionIcon sx={{ fontSize: "18px" }} />,
          }),
          ...showForRoles(["ADMIN", "PE", "QC", "MC"], {
            segment: "mac-management",
            title: "MAC Management",
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

      ...showForRoles(["ADMIN", "WH"], {
        segment: "smart-logistic-delivery",
        title: "Smart Logistic Delivery",
        icon: <LocalShippingIcon sx={{ fontSize: "20px" }} />,
      }),
    ],
    [roleName]
  );

  /* --------- filter navigation ด้วย Search --------- */

const filteredCoreNavigation = useMemo(() => {
  const query = menuSearch.trim().toLowerCase();
  if (!query) return baseNavigation;

  // ฟังก์ชันช่วยเช็คว่า item นี้ หรือ children ของมัน มี title ตรงกับคำค้นไหม
  const matches = (item) => {
    const title = (item.title || "").toLowerCase();
    if (title.includes(query)) return true;

    if (item.children && item.children.length > 0) {
      return item.children.some((child) => matches(child));
    }

    return false;
  };

  // ✅ ใช้ object เดิมจาก baseNavigation ไม่สร้าง {...item} ใหม่
  return baseNavigation.filter((item) => matches(item));
}, [menuSearch, baseNavigation]);


  /* --------- navigation สุดท้าย = Search box + เมนูที่กรองแล้ว --------- */

  const navigation = useMemo(
    () => [
      {
        kind: "header",
        
        title: (
       <Box  sx={{
  
            maxWidth: 400,   
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
      state: { from: location }, // 👈 จำ path เดิมไว้
    });
  }
}, [isAuthenticated, isLoginPage, location, navigate]);


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
