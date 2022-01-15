import { ERROR, FETCH_LOCATION_ID } from "../actions/getLocationId";

const initialState = {
  error: '',
  data: {}
}

const getLocationIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_ID:
      return { ...state, data: action.data }
    case ERROR:
      return { ...state, error: action.error }
    default:
      return { ...state }
  }
}

export default getLocationIdReducer
