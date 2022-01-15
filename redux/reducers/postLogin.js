import { LOGIN } from "../actions/postLogin";

const loginInitialState = {
    token: ''
}

const postLoginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload }
        default:
            return { ...state }
    }
}

export default postLoginReducer;
