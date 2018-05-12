import React from 'react'
import { shallow } from 'enzyme';
import { App } from '../App.web'

it('renders correctly', () => {
  const tree = shallow(<App />)
  expect(tree).toMatchSnapshot()
})
