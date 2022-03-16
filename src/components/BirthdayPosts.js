import React from "react";
import { Footer } from "./Footer";
import { Post } from "./Post";

export const BirthdayPosts = ({ birthdays, onDelete, onToggle }) => {
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

      <Footer />
    </>
  );
};
