import axios from 'axios';


export const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
export const ERROR = 'ERROR';

export const fetchReservations = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8080/proiectcolectiv/reservations/')
            .then(response => dispatch(
                { type: FETCH_RESERVATIONS, data: response.data }))
            .catch(err => dispatch(
                { type: ERROR, error: err.message }))
    }
}
