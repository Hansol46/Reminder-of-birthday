import React from "react";
import { Button } from "./Button";
import { useLocation } from "react-router-dom";

export const Header = ({
  title = "Reminder of birthday",
  onAddBirthday,
  showAdd,
}) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1> {title} </h1>

      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "#F4A460"}
          text={showAdd ? "Закрыть" : "Добавить"}
          onAddBirthday={onAddBirthday}
        />
      )}
    </header>
  );
};
