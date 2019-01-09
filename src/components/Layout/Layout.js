import React from 'react'
import Aux from '../../HOC/Aux'
import classes from './Layout.module.sass'

const layout = props => (
    <Aux>
        <div>Toolbar, SideDraver, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux> 
)

export default layout