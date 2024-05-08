/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-center p-10 mb-10 text-white gap-x-5 header">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
