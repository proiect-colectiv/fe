import {ERROR, FETCH_RESERVATION_ID} from "../actions/getReservationId";

const initialState = {
    error: '',
    data: { }
}

const getReservationIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESERVATION_ID:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getReservationIdReducer;
