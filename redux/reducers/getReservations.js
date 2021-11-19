import {ERROR, FETCH_RESERVATIONS} from "../actions/getReservations";

const initialState = {
    error: '',
    data: [],
}

const getReservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESERVATIONS:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getReservationsReducer;
