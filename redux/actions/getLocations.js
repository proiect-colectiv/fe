export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const ERROR = 'ERROR';

export const fetchLocations = () => {
    return (dispatch) => {
        return fetch('http://localhost:8080/proiectcolectiv/sportivelocations')
            .then(response => response.json())
            .then(json => dispatch(
                { type: FETCH_LOCATIONS, data: json }))
            .catch(err => dispatch(
                { type: ERROR,error: 'Unable to fetch data' }))
    }
}
