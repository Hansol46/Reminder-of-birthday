import React from "react";
import { Route } from "react-router-dom";
// Components
import { Header, Form, BirthdayPosts, About } from "../components";

export const MainPage = ({
  birthdays,
  onAdd,
  onDelete,
  onToggle,
  onAddBirthday,
  showAdd,
}) => {
  return (
    <div className="container">
      <Header onAddBirthday={onAddBirthday} showAdd={showAdd} />
      <Route
        path="/"
        exact
        render={() => (
          <>
            {showAdd && <Form onAdd={onAdd} />}

            {birthdays.length ? (
              <BirthdayPosts
                birthdays={birthdays}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ) : (
              "Создайте новое событие"
            )}
          </>
        )}
      />

      <Route path="/about" component={About} />
    </div>
  );
};
