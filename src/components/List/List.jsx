/* eslint-disable react/prop-types */
import EditableToMotto from "../EditableToMotto/EditableToMotto";
import styles from "./List.module.css";
export default function List({
  toMottos,
  deleteToMotto,
  toggleToMotto,
  editToMotto,
  changeHeaderImage,
}) {
  return (
    <ul className={styles.ul}>
      {toMottos.map((toMotto) => (
        <li key={toMotto?.id} className={styles.li}>
          <EditableToMotto
            toMotto={toMotto}
            deleteToMotto={deleteToMotto}
            toggleToMotto={toggleToMotto}
            editToMotto={editToMotto}
            changeHeaderImage={changeHeaderImage} 
          />
        </li>
      ))}
    </ul>
  );
}