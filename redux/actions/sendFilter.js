export const FETCH_FILTER = 'FETCH_FILTER';
export const ERROR = 'ERROR';

export const fetchFilter = (juc,loc) => {
     return (dispatch) => {
        return fetch( 'http://localhost:8080/proiectcolectiv/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'},
            body: JSON.stringify({
                playerNumber: juc,
                locationId: loc
            })
        })
            .then( response => response.json()) 
            .then(json => dispatch(
                { type: FETCH_FILTER, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}
