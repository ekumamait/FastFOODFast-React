import { loginUser, registerUser } from '../../actions/AuthActions';
import Enzyme from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { createMemoryHistory } from 'history';


Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const baseURL = process.env.baseURL;

/* test for logging in a user*/
it.only('test login action', () => {
    const url = `${baseURL}/auth/login`;
    fetchMock.postOnce(url, {
      auth: {
        username: 'eric',
        password: 'incorrect'
      },
      headers: { 'content-type': 'application/json' }
    });
    const expectedActions = [];
    const store = mockStore();
  
    return store
      .dispatch(loginUser())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
