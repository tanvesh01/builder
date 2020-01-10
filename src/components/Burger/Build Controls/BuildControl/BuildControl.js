import React from 'react'

import classes from './BuildControl.module.css'
const buildControl = props =>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            {props.ingredient[props.type] >0 ? <button className={classes.Less} onClick={props.less}>Less</button> : null }
            <button className={classes.More} onClick={props.more}>More</button>
        </div>

    )
}

export default buildControl