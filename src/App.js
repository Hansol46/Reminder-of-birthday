import React, { useState } from "react";
import MainPage from "./pages/MainPage";
function App() {
  const [birthdays, setBirthdays] = useState([
    {
      id: 1,
      person: "Мама",
      day: "05.12.1977",
      reminder: true,
    },
    {
      id: 2,
      person: "Начальник",
      day: "12.10.1986",
      reminder: false,
    },
    {
      id: 3,
      person: "Отец",
      day: "7.01.1977",
      reminder: true,
    },
  ]);
  //
  const [showAddBirthday, setShowAddBirthday] = useState(false);

  // add new birthday
  const addNewBirthday = (data) => {
    const id = Math.floor(Math.random() * 1000)
    const addNewPost = {id, ...data}
    setBirthdays([...birthdays, addNewPost])
  }
  // delete birthday
  const deleteBirthday = (id) => {
    setBirthdays(birthdays.filter(birthday => birthday.id !== id))
  }
  // добавление класса reminder
  const toggleReminder = (id) => {
    setBirthdays(
      birthdays.map( birthday => 
        birthday.id === id ? {...birthday, reminder: !birthday.reminder} : birthday
        )
    )
  }
  return (
    <>
      <MainPage 
      onAddBirthday={() => setShowAddBirthday(!showAddBirthday)}
      showAdd={showAddBirthday}
      birthdays={birthdays} 
      onAdd={addNewBirthday} 
      onDelete={deleteBirthday} 
      onToggle={toggleReminder}
      />
    </>
  );
}

export default App;
