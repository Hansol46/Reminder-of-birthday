import React from "react";
import { Route } from "react-router-dom";
import About from "../components/About";
import BirthdayPosts from "../components/BirthdayPosts";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

function MainPage({
  birthdays,
  onAdd,
  onDelete,
  onToggle,
  onAddBirthday,
  showAdd,
}) {
  return (
    <div className="container">
      <Header onAddBirthday={onAddBirthday} showAdd={showAdd} />
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            {/* if showAdd true, show Form */}
            {showAdd && <Form onAdd={onAdd} />}

            {/* if not posts, show text: 'Создать новое событие' */}
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
      <Footer />
    </div>
  );
}

export default MainPage;
