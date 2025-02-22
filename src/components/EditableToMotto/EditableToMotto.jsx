/* eslint-disable react/prop-types */
import styles from "./EditableToMotto.module.css";

export default function EditableToMotto({ toMotto, deleteToMotto, toggleToMotto, editToMotto }) {
  if (!toMotto) return null;

  return (
    <div className={styles.container}>
      {toMotto.image && (
        <img src={toMotto.image} alt={toMotto.title} className={styles.image} />
      )}
      <span
        onClick={() => toggleToMotto(toMotto.id)}
        style={{ textDecoration: toMotto.completed ? "line-through" : "none" }}
      >
        {toMotto.title}
      </span>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton} onClick={() => editToMotto(toMotto.id, prompt("Edytuj motto:", toMotto.title))}>
          ✏️ Edytuj
        </button>
        <button className={styles.deleteButton} onClick={() => deleteToMotto(toMotto.id)}>
          🗑️ Usuń
        </button>
      </div>
    </div>
  );
}
