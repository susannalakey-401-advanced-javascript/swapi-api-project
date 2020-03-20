import React from 'react';
import './History.scss'


const getUrlFromStorage = () => {
  const urlsRaw = localStorage.getItem('urls');
  if (urlsRaw) {
    return JSON.parse(urlsRaw);
  }
  return [];
}


const History = () => {
  return (
    <div className="search-list">
      <p>Search History</p>
      <ul>
        {getUrlFromStorage().map(url => (
          <li key={url}><a href={`swapi-api-project/?url=${url}`}>{url}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default History