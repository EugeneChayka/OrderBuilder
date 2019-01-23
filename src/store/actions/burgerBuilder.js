import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const addIngredient = (ingName) => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
})
export const removeIngredient = (ingName) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
})

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            })
    }
}