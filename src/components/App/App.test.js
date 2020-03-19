import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  let tree;

  beforeEach(() => {
    tree = shallow(<App />)
  })

  it('renders to the page', () => {
    expect(tree).toMatchSnapshot();
  })
})