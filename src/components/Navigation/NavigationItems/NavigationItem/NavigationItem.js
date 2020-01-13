import React from "react";
import classess from "./NavigationItem.module.css";
const navigationItem = props => {
  return (
    <li className={classess.NavigationItem}>
      <a href={props.link} className={props.active ? classess.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
