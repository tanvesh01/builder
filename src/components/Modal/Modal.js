import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../UI/Backdrop'

const modal = (props) =>(
    <React.Fragment>
        <Backdrop show={props.show} cancel={props.cancel} />
        <div className = {classes.Modal} 
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'

        }} 
        >  
        {props.children}
    </div>
    </React.Fragment>
           
)

export default modal