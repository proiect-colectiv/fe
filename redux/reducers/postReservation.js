import { ADD_RESERVATION } from "../actions/postReservation";

const initialState = {
  error: '',
  data: [],
  item: {}
}

const getReservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return { ...state, item: action.item }
    default:
      return {...state}
  }
}

export default getReservationsReducer;
