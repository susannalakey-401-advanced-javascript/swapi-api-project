import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock-jest'
import waitForExpect from 'wait-for-expect'

describe('<App />', () => {
  let tree;

  beforeEach(() => {
    tree = shallow(<App />)
    fetchMock.restore()
  })

  it('renders to the page', () => {
    expect(tree).toMatchSnapshot();
  })


  it('gets a search result when the GET button is clicked', async () => {
    const testData = {
      name: 'Luke',
      hair: 'blonde'
    }
    fetchMock.getAny({ results: testData })
    const app = shallow(<App />)
    const button = app.find('.get')
    button.simulate('click')
    await waitForExpect(() => {
      expect(app.state('body')).toEqual({ results: testData })
    })
  })
})