import React from "react";
import Post from "./Post";

function BirthdayPosts({ birthdays, onDelete, onToggle }) {
  return (
    <>
      {birthdays.map((birthday) => (
        <Post
          birthday={birthday}
          key={birthday.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default BirthdayPosts;
