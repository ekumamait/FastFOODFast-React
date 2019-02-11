import { GET_ERRORS } from '../constants/ActionTypes';

const baseUrl = process.env.baseUrl;
const localStorage = window.localStorage;

export const loginUser = (userData, history) => dispatch => {
  return fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
      if (data.access_token){
        const token = data.access_token;
        localStorage.setItem('token', token);
        history.push('/menu');
      }
    });
};

export const registerUser = (userData, history) => dispatch => {
  return fetch(`${baseUrl}/auth/sign_up`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
      const token = data.access_token;
      localStorage.setItem('token', token);
      history.push('/');
    });
};
