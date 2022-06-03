import React from 'react';
import "../scss.scss"

const Placeholder = (props) => {
  return (
    <div className="container placeholderPage d-flex justify-content-center align-items-center">
      <h1>{props.page} page haven't been implemented yet</h1>
    </div>
  );
}


export default Placeholder;
