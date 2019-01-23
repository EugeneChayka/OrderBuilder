import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummarry/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }


    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCanceled={this.checkoutCanceledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return (
            <div>
                {summary}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ings: state.ingredients
})

export default connect(mapStateToProps)(Checkout)