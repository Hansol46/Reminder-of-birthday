import React, { useState } from "react";

function Form({ onAdd }) {
  const [person, setPerson] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!person || !day) {
      alert("Введите имя и дату");
      setPerson("");
      setDay("");
      setReminder(false);
      return;
    }
    onAdd({ person, day, reminder });

    setPerson("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Человек:</label>
        <input
          type="text"
          placeholder="Введите имя человека"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Дата дня рождения:</label>
        <input
          type="text"
          placeholder="Введите число:месяц:год"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Напоминание</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Сохранить данные" className="btn btn-block" />
    </form>
  );
}

export default Form;
