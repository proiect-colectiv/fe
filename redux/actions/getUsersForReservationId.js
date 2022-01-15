export const FETCH_USERS_RESERVATIONS = 'FETCH_USERS_RESERVATIONS';
export const ERROR = 'ERROR';

export const fetchUsersReservations = (id) => {
    return (dispatch) => {
            return fetch('http://localhost:8080/proiectcolectiv/reservations/' + id + '/users')
                .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_USERS_RESERVATIONS, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}
