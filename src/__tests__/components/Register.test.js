import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Register } from '../../components/auth/Register';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Register/>', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Register />)
        .find('form.login')
        .exists()
    ).toBe(false);
  });

  it('should render a <form> element', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.form')).toExist;
  });

  it('should render a <div> element', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.div')).toExist;
  });

  it('renders a username input', () => {
    expect(shallow(<Register />).find('#username').length).toEqual(1);
  });

  it('renders a password input', () => {
    expect(shallow(<Register />).find('#password').length).toEqual(1);
  });

  it('renders an email input', () => {
    expect(shallow(<Register />).find('#email').length).toEqual(1);
  });

  const props = {
    registerUser: (user, history) => jest.fn(),
    auth: { isAuthenticated: false, user: {} },
    errors: {}
  };

  it('test Register component onchange', () => {
    const wrapper = shallow(<Register {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
    expect(instance.state.name).toEqual('value');
  });

  it('tests that the component receives new props', () => {
    const wrapper = shallow(<Register {...props} />);
    const data = {
      errors: { error: ' ' }
    };
    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.notFoundUser).toEqual(' ');
  });
});
