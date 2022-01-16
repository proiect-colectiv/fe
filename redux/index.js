import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getReservationsReducer from "./reducers/getReservations";
import getLocationsReducer from "./reducers/getLocations";
import getLocationIdReducer from './reducers/getLocationId';
import postReservation from './reducers/postReservation';
import getReservationIdReducer from './reducers/getReservationId';
import getUsersReservationsIdReducer from './reducers/getUsersForReservationId';
import getFilterReducer from "./reducers/sendFilter";
import postLoginReducer from "./reducers/postLogin";
import getUsersReducer from "./reducers/getUser";

const rootReducer = combineReducers({
    getReservationsReducer,
    getLocationsReducer,
    getLocationIdReducer,
    postReservation,
    getReservationIdReducer,
    getUsersReservationsIdReducer,
    getFilterReducer,
    postLoginReducer,
    getUsersReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
