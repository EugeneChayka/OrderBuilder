import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../../HOC/Aux/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import * as burgerBuilderActions from '../../store/actions/index'
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        console.log('<BurgerBuilder> Did Mount')
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        return sum > 0
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     const updatedCount = oldCount + 1
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCount
    //     const priceAddition = INGRIDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice + priceAddition
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //     this.updatePurchaseState(updatedIngredients)
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     if (oldCount <= 0) {
    //         return
    //     }
    //     const updatedCount = oldCount - 1
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updatedCount
    //     const priceDeduction = INGRIDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice - priceDeduction
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //     this.updatePurchaseState(updatedIngredients)
    // }
    // if the method is triggered through an event 'this' - doesnt work correctly
    // purchaseHandler() {
    //     this.setState({purchasing: true})
    // }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => this.props.history.push('/checkout')

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        let burger = this.state.error ? <p style={{ textAlign: 'center' }}>Ingredients can't be loaded!</p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price}
                    />
                </Aux>
            )
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}
            />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName))
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))