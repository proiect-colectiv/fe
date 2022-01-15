import {ERROR, FETCH_USERS_RESERVATIONS} from "../actions/getUsersForReservationId";

const initialState = {
    error: '',
    data: { }
}

const getUsersReservationsIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_RESERVATIONS:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getUsersReservationsIdReducer;
