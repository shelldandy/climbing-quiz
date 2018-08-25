import React from 'react';
import { shallow } from 'enzyme';
import Submit from './Submit';

describe('<Submit />', () => {
  test('renders', () => {
    const wrapper = shallow(<Submit />);
    expect(wrapper).toMatchSnapshot();
  });
});
