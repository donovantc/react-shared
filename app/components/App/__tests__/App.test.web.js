import React from 'react'
import { shallow } from 'enzyme';
import { App } from '../App.web'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = shallow(<App />)
  expect(tree).toMatchSnapshot()
})
