import React from 'react'
import classes from './Backdrop.module.sass'

const backdrop = props => (
    props.show ? <div 
        className={classes.Backdrop} 
        onClick={props.clicked}
        style={{
            opacity: props.show ? (setTimeout(()=>'1',)) : '0'
        }}   
    ></div> : null
)

export default backdrop