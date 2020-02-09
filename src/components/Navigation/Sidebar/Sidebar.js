import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidebar.module.css";
import Backdrop from "../../UI/Backdrop";
const Sidebar = props => {
  let attachedClasses = [classes.Sidebar, classes.Close];

    if(props.stateSidebar){
      attachedClasses = [classes.Sidebar, classes.Open];
    }
  
  return (
    <React.Fragment>
      <Backdrop show1={props.stateSidebar} cancel={props.cancel} />
      <div className={attachedClasses.join(' ')} show={props.stateSidebar}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
