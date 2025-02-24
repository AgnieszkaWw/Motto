import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedReflection.module.css";

const SavedReflections = () => {
  const [reflections, setReflections] = useState([]);
  const navigate = useNavigate();  // Hook do nawigacji

  useEffect(() => {
    // Odczytujemy wszystkie zapisane refleksje z localStorage
    const savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
  
    // Sortujemy refleksje po dacie (od najnowszych)
    savedReflections.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    setReflections(savedReflections);
  }, []);
  
  

  // Funkcje do obsługi przycisków
  const handleGoHome = () => {
    navigate("/");  // Powrót na stronę główną
  };

  const handleGoGratitude = () => {
    navigate("/gratitude");  // Powrót do strony "Moje wdzięczności" (zmień ścieżkę, jeśli jest inna)
  };

  return (
    <div className={styles.container}>
      <h2>Zapisane refleksje</h2>
      {reflections.length === 0 ? (
        <p>Brak zapisanych refleksji.</p>
      ) : (
        <ul className={styles.reflectionList}>
          {reflections.map((reflection, index) => (
            <li key={index} className={styles.reflectionItem}>
              <h3>{reflection.date}</h3>
              <p><strong>Refleksja 1:</strong> {reflection.reflection1}</p>
              <p><strong>Refleksja 2:</strong> {reflection.reflection2}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Przyciski nawigacyjne po prawej stronie */}
      <div className={styles.buttonsContainer}>
        <button onClick={handleGoHome} className={`${styles.button} ${styles.homeButton}`}>Powrót na stronę główną</button>
        <button onClick={handleGoGratitude} className={`${styles.button} ${styles.addReflectionButton}`}>Dodaj refleksję</button>
      </div>
    </div>
  );
};

export default SavedReflections;
