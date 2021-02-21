import actionTypes from "../actions/actionTypes";

export default (state = {
    data: [],
    getLoading: false,
    err: false
}, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTUARANTS_LOADING:
            return {
                ...state, getLoading: true, err: false
            }
        case actionTypes.GET_RESTUARANTS_SUCCESS:
            return {
                ...state,
                getLoading: false,
                err: false,
                data: action.payload
            }
        case actionTypes.GET_RESTUARANTS_FAILURE:
            return {
                ...state, getLoading: false, err: true
            }
        default:
            break;
    }
    return state;
}