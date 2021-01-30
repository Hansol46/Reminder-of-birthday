import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <h4> Версия программы 1.0.1</h4>
      <NavLink to="/">Назад</NavLink>
    </div>
  );
}

export default About;
