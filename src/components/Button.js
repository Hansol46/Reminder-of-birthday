import React from "react";

export const Button = ({ color = "steelblue", text, onAddBirthday }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onAddBirthday}
    >
      {text}
    </button>
  );
};
