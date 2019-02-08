import { GET_ERRORS } from '../constants/ActionTypes';

const baseUrl = process.env.baseUrl;

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
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      } else {
        console.log(data);
        let token = data.access_token;
        let user = data.username;
        localStorage.setItem('token', token);
        localStorage.setItem('username', user);
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
      } else {
        console.log(data);
        let token = data.access_token;
        let user = data.username;
        localStorage.setItem('token', token);
        localStorage.setItem('username', user);
        history.push('/');
      }
    });
};
