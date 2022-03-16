import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h4> Версия программы 1.5.1</h4>
      <p> Автор: Kiryaev Yury</p>
      <NavLink to="/">Назад</NavLink>
    </div>
  );
};
