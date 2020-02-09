import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) =>{
    return(
        props.show1 ? <div onClick={props.cancel} className={classes.Backdrop}></div> : null
    )
}

export default backdrop;