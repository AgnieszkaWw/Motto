
/* eslint-disable react/prop-types */
import styles from "./EditableToMotto.module.css";
import { getRandomImage } from "../../utils";

export default function EditableToMotto({ toMotto, deleteToMotto, toggleToMotto, editToMotto, changeHeaderImage }) {
  if (!toMotto) return null; 
  const handleImageHover = () => {
    const newImage = getRandomImage();
    changeHeaderImage(newImage); // Wywołaj funkcję zmieniającą obrazek
  };
  

  return (
    <div className={styles.container}>
      {/* Obrazek losowy, po najechaniu zmienia obrazek w nagłówku */}
      <img
        src={getRandomImage()}
        alt="Random"
        className={styles.thumbnail}
        onMouseEnter={handleImageHover} // Funkcja wywoływana po najechaniu
      />

      <span
        onClick={() => toggleToMotto(toMotto.id)}
        style={{ textDecoration: toMotto.completed ? "line-through" : "none" }}
        className={styles.mottoText}
      >
        {toMotto.title}
      </span>

      {/* Kontener dla przycisków */}
      <div className={styles.buttonContainer}>
        <button
          className={styles.editButton}
          onClick={() =>
            editToMotto(toMotto.id, prompt("Edytuj motto:", toMotto.title))
          }
        >
          ✏️ Edytuj
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => deleteToMotto(toMotto.id)}
        >
          🗑️ Usuń
        </button>
      </div>
    </div>
  );
}
