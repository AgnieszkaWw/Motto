/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './Form.module.css';

export default function Form({ addToMotto }) {
  const [toMotto, setToMotto] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!toMotto.trim()) return;
    addToMotto({ title: toMotto, completed: false, id: Date.now() }, toMotto);
    setToMotto('');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={toMotto}
          onChange={e => setToMotto(e.target.value)}
          className={styles.input}
          placeholder="Wpisz swoje motto"
        />
        <button type="submit" className={styles.button}>Dadaj</button>
      </form>
      
    </div>
  );
}
