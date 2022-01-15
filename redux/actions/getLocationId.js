export const FETCH_LOCATION_ID = 'FETCH_LOCATION_ID';
export const ERROR = 'ERROR';

export const fetchLocationId = (id) => {
  return (dispatch) => {
    return fetch('http://localhost:8080/proiectcolectiv/sportivelocations/' + id)
      .then(response => response.json())
      .then(json => dispatch(
        { type: FETCH_LOCATION_ID, data: json }))
      .catch(err => dispatch(
        { type: ERROR, error: 'Unable to fetch data' }))
  }
}
