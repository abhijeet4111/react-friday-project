import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { mainObj } from "../MainObj";
import { CheckListComponent } from "./CheckListComponent";

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

let arrayObj = mainObj.map((data) => data.verticalObj);
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
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", alignItems: "start" }}
      >
        {mainObj.map((data) => (
          <Tab key={data.verticalObj.id} label={data.verticalObj.name} />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        Users and Groups
        <CheckListComponent prop={arrayObj[0].tabTitle} propTab={arrayObj[0]} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Branding and Customization
        <CheckListComponent prop={arrayObj[1].tabTitle} propTab={arrayObj[1]} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        MFA / Adaptive
        <CheckListComponent prop={arrayObj[2].tabTitle} propTab={arrayObj[2]} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Apps & policies
        <CheckListComponent prop={arrayObj[3].tabTitle} propTab={arrayObj[3]} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Authentication Source
        <CheckListComponent prop={arrayObj[4].tabTitle} propTab={arrayObj[4]} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Reports
        <CheckListComponent prop={arrayObj[5].tabTitle} propTab={arrayObj[5]} />
      </TabPanel>
    </Box>
  );
}
