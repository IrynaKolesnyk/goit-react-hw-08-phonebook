import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h2 className="error">{this.props.isError}</h2>
      <Link to="/login">Try again</Link>
    </div>
  );
};

export default Error;
