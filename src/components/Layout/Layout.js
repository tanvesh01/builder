import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/Sidebar/Sidebar";
class Layout extends Component {

  state = {
    sidebarShown:false
  };

  cancelHandler =()=>{
    this.setState({
      sidebarShown:false
    })
  }

  openSidebar = () =>{
    this.setState({
      sidebarShown:true
    })
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar openSidebar={this.openSidebar} />
        <Sidebar cancel ={this.cancelHandler} stateSidebar={this.state.sidebarShown} />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
