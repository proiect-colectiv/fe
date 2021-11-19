export const ADD_RESERVATION = 'addReservation'
import axios from 'axios'

export const addReservation = (reservation) => dispatch => {
  axios.post(`https://jsonplaceholder.typicode.com/posts`)
    .then(
      dispatch({
        type: ADD_RESERVATION,
        payload: reservation
      })
    )
    .catch( error => {
      console.log(error)
    })
}
