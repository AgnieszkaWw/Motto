/* eslint-disable react/prop-types */
import styles from "./List.module.css";
import EditableToMotto from "../EditableToMotto/EditableToMotto";

export default function List({ toMottos, deleteToMotto, toggleToMotto, editToMotto }) {
  return (
    <ul className={styles.ul}>
      {toMottos.map(toMotto => (
        toMotto ? (
          <li key={toMotto.id} className={styles.li}>
            <EditableToMotto
              toMotto={toMotto}
              deleteToMotto={deleteToMotto}
              toggleToMotto={toggleToMotto}
              editToMotto={editToMotto}
            />
          </li>
        ) : null
      ))}
    </ul>
  );
}
