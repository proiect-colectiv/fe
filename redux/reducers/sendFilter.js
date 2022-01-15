import {ERROR, FETCH_FILTER} from "../actions/sendFilter";

const initialState = {
    error: '',
    data: []
}

const getFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTER:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getFilterReducer