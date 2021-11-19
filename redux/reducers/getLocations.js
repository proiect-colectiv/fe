import {ERROR, FETCH_LOCATIONS} from "../actions/getLocations";

const initialState = {
    error: '',
    data: []
}

const getLocationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getLocationsReducer