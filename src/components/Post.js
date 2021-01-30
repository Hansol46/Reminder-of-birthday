import { FaTimes } from "react-icons/fa";
function Post({ birthday, onDelete, onToggle }) {
  return (
    <div
      className={`task ${birthday.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(birthday.id)}
    >
      <h3>
        {birthday.person}

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(birthday.id)}
        />
      </h3>
      <p> {birthday.day} </p>
    </div>
  );
}

export default Post;
