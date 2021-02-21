import axios from "../axios";
import actionTypes from "./actionTypes"

function getRestuarantsLoading() {
    return {
        type: actionTypes.GET_RESTUARANTS_LOADING
    }
}

function getRestuarantsSuccess(payload) {
    return {
        type: actionTypes.GET_RESTUARANTS_SUCCESS,
        payload
    }
}

function getRestuarantsFailure(message) {
    return {
        type: actionTypes.GET_RESTUARANT_FAILURE,
        payload: {
            message
        }
    }
}

function getRestuarantLoading() {
    return {
        type: actionTypes.GET_RESTUARANT_LOADING
    }
}

function getRestuarantSuccess(payload) {
    return {
        type: actionTypes.GET_RESTUARANT_SUCCESS,
        payload
    }
}

function getRestuarantFailure(message) {
    return {
        type: actionTypes.GET_RESTUARANT_FAILURE,
        payload: {
            message
        }
    }
}

export function getRestuarants() {
    return async dispatch => {
        await dispatch(getRestuarantsLoading());
        try {
            const res = await axios.get('/restuarants');
            dispatch(getRestuarantsSuccess(res.data))
        } catch (ex) {
            console.error('error in fetching restuarants');
            dispatch(getRestuarantsFailure(ex.message))
        }
    }
}

export function getRestuarant(index, restuarants) {
    return async dispatch => {
        await dispatch(getRestuarantLoading());
        try {
            if (restuarants[index]) {
                dispatch(getRestuarantSuccess({ ...restuarants[index] }));
                return;
            }
            const res = await axios.get(`/restuarant/${index}`);
            dispatch(getRestuarantSuccess(res.data))
        } catch (ex) {
            console.error('error in fetching restuarants');
            dispatch(getRestuarantFailure(ex.message))
        }
    }
}