import React from 'react';
// import { If, When, Unless } from '../Conditionals/Conditionals'


const getUrlFromStorage = () => {
  const urlsRaw = localStorage.getItem('urls');
  if (urlsRaw) {
    return JSON.parse(urlsRaw);
  }
  return [];
}


const History = () => {
  return (
    <ul>
      {getUrlFromStorage().map(url => (
        <li key={url}><a href={`/?url=${url}`}>{url}</a></li>
      ))}
    </ul>
  )
}

export default History