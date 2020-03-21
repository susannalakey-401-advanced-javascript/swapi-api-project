import React from 'react';
import './History.scss'


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
          <li key={url}><a href={`/?url=${url}`}>{url}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default History