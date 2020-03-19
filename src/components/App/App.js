import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results'
import Footer from '../Footer/Footer'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      url: 'https://swapi.co/api/people/',
      body: undefined,
      headers: {}
    };

  }

  getResults = async (method) => {
    const response = await fetch(this.state.url, { method, mode: 'cors' })
    const body = await response.json()
    this.setState({
      body: body,
      headers: [...response.headers.entries()]
    })
  }

  handleChange = e => {
    this.setState({ url: e.target.value });

  }

  render() {
    return (
      <>
        <div className="App">
          <Header />

          <form>
            <label>
              Enter API URL:
              <input className="text-input" type="text" value={this.state.url} onChange={this.handleChange} />
            </label>
            <div>
              <button type="button" onClick={() => { this.getResults('GET') }} className="submit">GET</button>
              <button type="button" onClick={() => { this.getResults('PUT') }} className="submit">PUT</button>
              <button type="button" onClick={() => { this.getResults('POST') }} className="submit">POST</button>
              <button type="button" onClick={() => { this.getResults('DELETE') }} className="submit">DELETE</button>
            </div>

          </form>
          <Results headers={this.state.headers} body={this.state.body} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
