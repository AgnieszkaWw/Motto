import { useState, useEffect } from "react";
import styles from "./InputReflection.module.css";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function InputReflection() {
  const [input1] = useState("W tym momencie czuję...");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [savedReflections, setSavedReflections] = useState([]);

  useEffect(() => {
    const reflections = JSON.parse(localStorage.getItem("reflections")) || [];
    setSavedReflections(reflections);
  }, []);

  const handleSave = () => {
    const date = getCurrentDate();

    const newReflection = {
      date: date,
      reflection1: input2,
      reflection2: input3,
    };

    const updatedReflections = [...savedReflections, newReflection];

    localStorage.setItem("reflections", JSON.stringify(updatedReflections));

    setSavedReflections(updatedReflections);
    setInput2("");
    setInput3("");

    alert("Dane zapisane!");
  };

  const handleClear = () => {
    setInput2("");
    setInput3("");
  };

  return (
    <div className={styles.container}>
      <input type="text" value={input1} readOnly className={styles.input} />
      <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Podziel się swoimi odczuciami..." className={styles.input} />
      <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Podziel się swoimi odczuciami..." className={styles.input} />
      <div className={styles.buttonsContainer}>
        <button onClick={handleSave} className={`${styles.button} ${styles.saveButton}`}>Zapisz</button>
        <button onClick={handleClear} className={`${styles.button} ${styles.clearButton}`}>Wyczyść</button>
      </div>
    </div>
  );
}
