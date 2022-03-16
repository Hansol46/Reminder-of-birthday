import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>Используйте двойное нажатие, чтобы выполнить задачу</p>
      <NavLink to="/about">О проекте</NavLink>
    </footer>
  );
};
