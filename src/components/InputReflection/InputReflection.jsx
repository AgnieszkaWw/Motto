import { useState } from "react";
import styles from "./InputReflection.module.css";

export default function InputReflection() {
  const [input1] = useState("W tym momencie czuję...");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleSave = () => {
    localStorage.setItem("reflection1", input2);
    localStorage.setItem("reflection2", input3);
    alert("Dane zapisane!");
  };

  const handleClear = () => {
    setInput2("");
    setInput3("");
    localStorage.removeItem("reflection1");
    localStorage.removeItem("reflection2");
  };

  return (
    <div className={styles.container}>
      <input type="text" value={input1} readOnly className={styles.input} />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Podziel się swoimi odczuciami..."
        className={styles.input}
      />
      <input
        type="text"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        placeholder="Podziel się swoimi odczuciami..."
        className={styles.input}
      />
      <div className={styles.buttonsContainer}>
        <button onClick={handleSave} className={`${styles.button} ${styles.saveButton}`}>Zapisz</button>
        <button onClick={handleClear} className={`${styles.button} ${styles.clearButton}`}>Wyczyść</button>
      </div>
    </div>
  );
}
