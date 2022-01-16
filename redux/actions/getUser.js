export const FETCH_USERS = 'FETCH_USERS';
export const ERROR = 'ERROR';

const localStorageToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;


export const fetchUsers = () => {
    return (dispatch) => {
        return fetch( 'http://localhost:8080/proiectcolectiv/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization':localStorageToken
            }
            })
            .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_USERS, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}