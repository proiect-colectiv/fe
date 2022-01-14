export const FETCH_RESERVATION_ID = 'FETCH_RESERVATION_ID';
export const ERROR = 'ERROR';

export const fetchReservationId = (id) => {
    return (dispatch) => {
        return fetch('http://localhost:8080/proiectcolectiv/reservations/' + id)
            .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_RESERVATION_ID, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}
