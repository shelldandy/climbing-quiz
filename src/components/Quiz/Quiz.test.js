import React from 'react';
import { shallow } from 'enzyme';
import Quiz from './Quiz';

describe('<Quiz />', () => {
  test('renders', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper).toMatchSnapshot();
  });
});
