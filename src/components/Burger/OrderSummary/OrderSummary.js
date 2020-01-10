import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return <li key={igKey}><span><strong>{igKey}</strong></span> : {props.ingredients[igKey]}</li>
        })
    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger is waiting with following ingredients:</p>
            {ingredientSummary}
        </React.Fragment>
    )
}

export default orderSummary;