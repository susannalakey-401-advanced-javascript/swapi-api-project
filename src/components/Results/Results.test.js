import React from 'react'
import Results from './Results'
import { shallow } from 'enzyme'

describe('<Results />', () => {
  let tree;

  beforeEach(() => {
    const headers = {
      things: 'hello',
    }

    const body = {
      stuff: 'stuff'
    }
    tree = shallow(<Results headers={headers} body={body} />)
  })

  it('renders to the page', () => {
    expect(tree).toMatchSnapshot();
  })
})