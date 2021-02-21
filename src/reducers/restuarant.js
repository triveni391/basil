import actionTypes from "../actions/actionTypes";

export default (state = {
    data: {},
    loading: false,
    error: false
}, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTUARANT_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.GET_RESTUARANT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case actionTypes.GET_RESTUARANT_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            break;
    }
    return state;
}