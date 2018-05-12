import React from 'react'
import { shallow } from 'enzyme';
import Example from '../'

it('renders correctly', () => {
  const tree = shallow(<Example />);
  expect(tree).toMatchSnapshot()
})
