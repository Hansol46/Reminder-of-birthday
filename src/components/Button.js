import React from "react";

function Button({ color, text, onAddBirthday }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onAddBirthday}
    >
      {text}
    </button>
  );
}
Button.defaultProps = {
  color: "steelblue",
};

export default Button;
