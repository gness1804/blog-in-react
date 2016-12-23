import React, { Component } from 'react';
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <p>404 File Not Found.</p>
      <Link to="/">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
