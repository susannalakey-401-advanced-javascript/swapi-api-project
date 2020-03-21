import React from 'react';
import './History.scss'
import { Link } from 'react-router-dom'




const getUrlFromStorage = () => {
  const urlsRaw = localStorage.getItem('urls');
  if (urlsRaw) {
    return JSON.parse(urlsRaw);
  }
  // if there's nothing in localStorage, send back an empty array
  return [];
}


const History = () => {
  return (
    <div className="search-list">
      <p>Search History</p>
      <ul>
        {getUrlFromStorage().map(url => (
          <li key={url}><Link to={{ pathname: '/', search: `?url=${url}` }}>{url}</Link></li>
        ))}
      </ul>
    </div >
  )
}

export default History