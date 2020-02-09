import React from "react";
import Button from "../../UI/button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span>
          <strong>{igKey}</strong>
        </span>{" "}
        : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger is waiting with following ingredients:</p>
      <div>{ingredientSummary}</div>
      <p>Your checkout price is: <strong>{props.price}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={props.cancel} classType="Danger">CANCEL</Button>
      <Button classType="Success" clicked={props.continue} >CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;
