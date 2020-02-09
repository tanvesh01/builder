import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../UI/Backdrop";

class modal extends Component { 
  shouldComponentUpdate(nextProps, nextState ){
    return nextProps.show !== this.props.show;
  }
  
  componentWillUpdate(){
    console.log("Modal did update!!!!!!!")
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show1={this.props.show} cancel={this.props.cancel} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default modal;
