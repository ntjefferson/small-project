import { ADD_HERO, DELETE_HERO, SELECT_HERO, UPDATE_SELECTED, SORT_ID, SORT_NAME, SORT_POWER } from '../actions';

export const addHero = data => (dispatch) => {
    dispatch({
        type: ADD_HERO,
        payload: data
    })
}

export const deleteHero = data => (dispatch) => {
    dispatch({
        type: DELETE_HERO,
        payload: data
    })
    dispatch({
        type: UPDATE_SELECTED
    })
}

export const selectHero = data => (dispatch) => {
    dispatch({
        type: SELECT_HERO,
        payload: data
    })
    dispatch({
        type: UPDATE_SELECTED
    })
}

export const sortId = () => (dispatch) => {
    dispatch({
        type: SORT_ID,
    })
}

export const sortName = () => (dispatch) => {
    dispatch({
        type: SORT_NAME,
    })
}

export const sortPower = () => (dispatch) => {
    dispatch({
        type: SORT_POWER,
    })
}