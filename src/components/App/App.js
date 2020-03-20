import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results'
import Footer from '../Footer/Footer'
import { If, When, Unless } from '../Conditionals/Conditionals'
import loading from './loading.gif'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      url: 'https://swapi.co/api/people/',
      body: undefined,
      headers: {},
      loading: false,
    };

  }

  getResults = async (method) => {
    this.setState({
      body: undefined,
      headers: {},
    })
    console.log('start')
    this.setState({ loading: true })
    const response = await fetch(this.state.url, { method, mode: 'cors' })
    const body = await response.json()
    this.setState({
      body: body,
      headers: [...response.headers.entries()],
      loading: false,
    })
    this.setLocalStorage();
    console.log('end')
  }

  handleChange = e => {
    this.setState({ url: e.target.value });
  }



  // only runs first time app.js renders
  componentDidMount() {
    const url = new URLSearchParams(window.location.search).get('url');
    if (url) {
      this.setState({
        url
        // put this.getResults in a callback function because it guarantees that the state has been set when we call it
      }, () => {
        this.getResults('GET')
      })


    }
  }


  setLocalStorage = e => {
    // localStorage.setItem('urls', this.state.url)
    const urlsRaw = localStorage.getItem('urls');
    let urls;
    if (urlsRaw) {
      urls = JSON.parse(urlsRaw);
    } else {
      urls = [];
    }
    urls.push(this.state.url);
    localStorage.setItem('urls', JSON.stringify(urls))
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <If condition={this.state.body === null}>
            <p className="fetch-error">Please enter a valid search URL</p>
          </If>

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
          <If condition={this.state.loading}>
            <img src={loading} className="loading" />
          </If>
          <If condition={!this.state.isHidden}>
            <Results headers={this.state.headers} body={this.state.body} />
          </If>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
