/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import toMottoReducer from "./reducer/toMottoReducer";
import Form from "./components/Form/Form";
import List from "./components/List/List";

export default function App({ changeHeaderImage }) {
  const [toMottos, dispatch] = useReducer(toMottoReducer, []);

  useEffect(() => {
    fetch("http://localhost:5000/Mottos?_limit=5")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH", mottos: res }))
      .catch((error) => console.error("Błąd ładowania danych:", error));
  }, []);

  return (
    <div>
      <Form addToMotto={(toMotto) => dispatch({ type: "ADD", toMotto })} />
      <List
        toMottos={toMottos}
        deleteToMotto={(id) => dispatch({ type: "DELETE", id })}
        toggleToMotto={(id) => dispatch({ type: "TOGGLE", id })}
        editToMotto={(id, title) => dispatch({ type: "EDIT", id, title })}
        changeHeaderImage={changeHeaderImage} // Przekaż funkcję dalej
      />
    </div>
  );
}