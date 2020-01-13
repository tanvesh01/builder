import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './Sidebar.module.css'
const Sidebar = props => {
  return (
    <div className={classes.Sidebar}>
      <Logo />
      <nav>
        <NavigationItems  />
      </nav>
    </div>
  );
};

export default Sidebar;
