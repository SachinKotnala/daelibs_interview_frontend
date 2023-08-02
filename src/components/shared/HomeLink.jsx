import { Link } from "react-router-dom";
import React from 'react'

const HomeLink = () => {
  return (
    <Link to="/" className="my-10" data-testid="home-link">
      {"<< back to Home page"}
    </Link>
  );
};

export default HomeLink;
