export const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
export const ERROR = 'ERROR';

export const fetchReservations = () => {
    return (dispatch) => {
            return fetch('http://localhost:8080/proiectcolectiv/reservations/')
                .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_RESERVATIONS, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}
