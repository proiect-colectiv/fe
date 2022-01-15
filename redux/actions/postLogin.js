import axios from 'axios';

export const LOGIN = 'login';

const localStorageToken = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

if (localStorageToken) {
    axios.defaults.headers['Authorization'] = localStorageToken;
}

export const logout = () => {
    delete axios.defaults.headers['Authorization'];
}

export const login = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8080/proiectcolectiv/authenticate', {
            username,
            password,
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': '*/*'
                }
            }
        );

        if (response && response.status === 200) {
            axios.defaults.headers['Authorization'] = response.data.token;

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: LOGIN,
                payload: response.data.token
            })
        }
    } catch (error) {
        console.log(error);
    }
}
