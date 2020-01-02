import React from "react";

const layout = props => (
  <React.Fragment>
    <div>Toobaar, sidebar</div>
    <main>{props.children}</main>
  </React.Fragment>
);

export default layout;
