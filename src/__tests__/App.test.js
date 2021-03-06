import ReactDOM from 'react-dom';
import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
