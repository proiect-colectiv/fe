import {ERROR, FETCH_USERS} from "../actions/getUser";

const initialState = {
    error: '',
    data: [],
}

const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, data: action.data }
        case ERROR:
            return { ...state, error: action.error }
        default:
            return {...state}
    }
}

export default getUsersReducer;