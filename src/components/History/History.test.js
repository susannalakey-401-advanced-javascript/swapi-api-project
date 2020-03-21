import React from 'react'
import History from './History'
import { shallow } from 'enzyme'

describe('<History />', () => {
  let tree;

  beforeEach(() => {
    tree = shallow(<History />)
  })

  it('renders to the page', () => {
    expect(tree).toMatchSnapshot();
  })
})