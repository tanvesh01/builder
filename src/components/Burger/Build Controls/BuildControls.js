import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classess from './BuildControls.module.css'
const controls = [
    {label:"Salad" , type: "salad"},
    {label:"Bacon" , type: "bacon"},
    {label:"Cheese" , type: "cheese"},
    {label:"Meat" , type: "meat"},
]

const buildControls = (props) =>{
    return(
        <div className={classess.BuildControls}>
            <p>Current price : {props.price}</p>
            {controls.map(ctrl =>{
                return( 
                    
                <BuildControl key ={ctrl.label} 
                more ={() => props.addIngredient(ctrl.type)} 
                less ={() => props.remove(ctrl.type)} 
                ingredient = {props.ingredients}
                type= {ctrl.type}
                label ={ctrl.label} />
            )})}
            <button disabled={!props.purchasable} onClick={props.order} className={classess.OrderButton}>ORDER NOW</button>
        </div>
        )
}

export default buildControls
