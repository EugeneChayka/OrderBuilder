import reducer, { initialState } from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should store the token upon login', () => {
        const idToken = 'some'
        const userId = 'some'
        expect(reducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            idToken,
            userId
        })).toEqual({
            ...initialState,
            token: idToken,
            userId
        })
    })
})