import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/test_Auth">
      Go Home
    </Link>
  </div>
);

export default NotFound;