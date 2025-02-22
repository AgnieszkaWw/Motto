import { useEffect, useReducer } from "react";
import toMottoReducer from "./reducer/toMottoReducer";
import Form from "./components/Form/Form";
import List from "./components/List/List";

export default function App() {
  const [toMottos, dispatch] = useReducer(toMottoReducer, []);

  useEffect(() => {
    fetch("http://localhost:5000/Mottos?_limit=5")
      .then(res => res.json())
      .then(res => dispatch({ type: "FETCH", mottos: res }))
      .catch(error => console.error("Błąd ładowania danych:", error));
  }, []);

  const deleteToMotto = id => {
    fetch(`http://localhost:5000/Mottos/${id}`, { method: "DELETE" })
      .then(() => dispatch({ type: "DELETE", id }))
      .catch(error => console.error("Błąd usuwania:", error));
  };

  const toggleToMotto = id => {
    const toMotto = toMottos.find(toMotto => toMotto.id === id);
    if (!toMotto) return;

    fetch(`http://localhost:5000/Mottos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !toMotto.completed }),
    })
      .then(() => dispatch({ type: "TOGGLE", id }))
      .catch(error => console.error("Błąd zmiany statusu:", error));
  };

  const addToMotto = toMotto => {
    fetch("http://localhost:5000/Mottos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toMotto),
    })
      .then(res => res.json())
      .then(newToMotto => dispatch({ type: "ADD", toMotto: newToMotto }))
      .catch(error => console.error("Błąd dodawania:", error));
  };

  const editToMotto = (id, title) => {
    fetch(`http://localhost:5000/Mottos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then(() => dispatch({ type: "EDIT", id, title }))
      .catch(error => console.error("Błąd edycji:", error));
  };

  return (
    <div>
      <Form addToMotto={addToMotto} />
      <List
        toMottos={toMottos}
        deleteToMotto={deleteToMotto}
        toggleToMotto={toggleToMotto}
        editToMotto={editToMotto}
      />
    </div>
  );
}
