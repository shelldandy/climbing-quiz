import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('<Question />', () => {
  test('renders', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper).toMatchSnapshot();
  });
});
