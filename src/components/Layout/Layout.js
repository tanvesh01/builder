import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from '../Navigation/Sidebar/Sidebar'
const layout = props => (
  <React.Fragment>
    <Toolbar />
    <Sidebar />
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
