import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VerticalTabs from "./VerticalTabs";
import { mainObj } from "../MainObj";
import { VerticalTabsUser } from "./VerticalTabsUser";
export default function HorizontalTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Admin Capabilities" value="1" />
            <Tab label="Enduser Capabilities" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <VerticalTabs mainObj={mainObj} />
        </TabPanel>
        <TabPanel value="2">
          {/* <VerticalTabs mainObj={mainObj} /> */}
          <VerticalTabsUser mainObj={mainObj} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
