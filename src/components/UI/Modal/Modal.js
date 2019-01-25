import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../HOC/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        let attachedClasses = [classes.Modal]
        if (this.props.show) {
            attachedClasses.push(classes.Show)
        }
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={attachedClasses.join(' ')} >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal