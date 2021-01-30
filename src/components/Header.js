import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onAddBirthday, showAdd }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1> {title} </h1>

      {/* Show button only then you on main page */}
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Закрыть" : "Добавить"}
          onAddBirthday={onAddBirthday}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Reminder-of-birthday",
};
export default Header;
