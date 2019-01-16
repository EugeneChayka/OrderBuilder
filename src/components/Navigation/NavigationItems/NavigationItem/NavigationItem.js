import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './NavigationItem.module.sass'

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link} 
            activeStyle={{
                backgrounColor: '#8f5c2c',
                borderBottom: '4px solid #40a4c8',
                color: 'white'
            }}
            exact
        >
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem