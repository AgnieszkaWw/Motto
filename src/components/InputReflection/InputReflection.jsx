import { useState } from "react";
import styles from "./InputReflection.module.css";

// Funkcja do uzyskania bieżącej daty w formacie "dd-mm-yyyy - dzień tygodnia"
const getCurrentDate = () => {
  const today = new Date();
  const daysOfWeek = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();
  const dayOfWeek = daysOfWeek[today.getDay()];

  return `${day}-${month}-${year} - ${dayOfWeek}`;
};

export default function InputReflection() {
  const [input1] = useState("W tym momencie czuję...");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const handleSave = () => {
    const date = new Date();
    const formattedDate =
      date.toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) +
      " - " +
      date.toLocaleString("pl-PL", { weekday: "long" });
  
    // Tworzymy obiekt refleksji z datą i dwoma wprowadzonymi refleksjami
    const newReflection = {
      date: formattedDate,
      reflection1: input2,
      reflection2: input3,
    };
  
    // Pobieramy wszystkie zapisane refleksje z localStorage
    const savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
  
    // Dodajemy nową refleksję do listy
    savedReflections.push(newReflection);
  
    // Zapisujemy całą listę refleksji w localStorage
    localStorage.setItem("reflections", JSON.stringify(savedReflections));
  
    alert("Dane zapisane!");
  };
  
  
    const handleClear = () => {
    setInput2("");
    setInput3("");
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
