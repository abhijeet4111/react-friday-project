// const VerticalTabs = () => {
//   return <div></div>;
// };

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", alignItems: "start" }}
      >
        <Tab label="Users & Groups" {...a11yProps(0)} />
        <Tab label="Branding / Customization" {...a11yProps(1)} />
        <Tab label="MFA / Adaptive" {...a11yProps(2)} />
        <Tab label="Apps & Policies" {...a11yProps(3)} />
        <Tab label="Authentication Source" {...a11yProps(4)} />
        <Tab label="Reports" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Users and Groups
      </TabPanel>
      <TabPanel value={value} index={1}>
        Branding and Customization
      </TabPanel>
      <TabPanel value={value} index={2}>
        MFA / Adaptive
      </TabPanel>
      <TabPanel value={value} index={3}>
        Apps & policies
      </TabPanel>
      <TabPanel value={value} index={4}>
        Authentication Source
      </TabPanel>
      <TabPanel value={value} index={5}>
        Reports
      </TabPanel>
    </Box>
  );
}
