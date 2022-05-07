import React from 'react'
import { NavLink } from "react-router-dom";

const NavigateToSearchBtn = () => {
  return (
    <div className="open-search">
      <NavLink to="/search">Add a book</NavLink>
    </div>
  );
}

export default NavigateToSearchBtn