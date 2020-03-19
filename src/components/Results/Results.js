import React from 'react';
import './Results.scss';





const Results = ({ body, headers }) => {
  if (!body) {
    return null;
  }

  return (
    <>
      <div className="results">
        <pre>{JSON.stringify(headers, null, 2)}</pre>
        <pre>{JSON.stringify(body, null, 2)}</pre>
      </div>
    </>
  )
}

export default Results