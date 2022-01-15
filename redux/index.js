import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import getReservationsReducer from "./reducers/getReservations";
import getLocationsReducer from "./reducers/getLocations";
import getLocationIdReducer from './reducers/getLocationId';
import postReservation from './reducers/postReservation';
import getReservationIdReducer from './reducers/getReservationId';
import getUsersReservationsIdReducer from './reducers/getUsersForReservationId';

const rootReducer = combineReducers({
    getReservationsReducer,
    getLocationsReducer,
    getLocationIdReducer,
    postReservation,
    getReservationIdReducer,
    getUsersReservationsIdReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
