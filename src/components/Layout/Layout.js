import React, {Component} from 'react'
import Aux from '../../HOC/Aux'
import classes from './Layout.module.sass'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHanler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHanler} />
                <div>Toolbar, SideDraver, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux> 
        )
    }
}

export default Layout