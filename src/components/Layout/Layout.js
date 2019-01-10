import React from 'react'
import Aux from '../../HOC/Aux'
import classes from './Layout.module.sass'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = props => (
    <Aux>
        <Toolbar/>
        <div>Toolbar, SideDraver, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux> 
)

export default layout