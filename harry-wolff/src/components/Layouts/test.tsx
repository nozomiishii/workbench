import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";

const srcCode = ` <Paper square>
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Active" />
      <Tab label="Active" />
      <Tab label="Active" />
    </Tabs>
  </Paper>
`;

const Footer = () => {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2} style={{ marginTop: "60px" }}>
      <Grid item xs md={6}>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Active" />
            <Tab label="Active" />
            <Tab label="Active" />
          </Tabs>
        </Paper>
      </Grid>
      <Grid item xs md={6}>
        <pre className="prettyprint">
          <code>{srcCode}</code>
        </pre>
      </Grid>
    </Grid>
  );
};

export default Footer;
