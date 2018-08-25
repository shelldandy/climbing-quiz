import React from 'react';
import { shallow } from 'enzyme';
import Range from './Range';

describe('<Range />', () => {
  test('renders', () => {
    const wrapper = shallow(<Range />);
    expect(wrapper).toMatchSnapshot();
  });
});
