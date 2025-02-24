import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedReflection.module.css";

const SavedReflections = () => {
  const [reflections, setReflections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  // Strona, którą aktualnie wyświetlamy
  const [reflectionsPerPage] = useState(5);  // Liczba refleksji na stronie
  const navigate = useNavigate();

  useEffect(() => {
    const savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];

    // Sortowanie danych po dacie (od najnowszych)
    savedReflections.sort((a, b) => new Date(b.date) - new Date(a.date));

    setReflections(savedReflections);
  }, []);

  // Obliczamy indeksy refleksji, które mają być wyświetlane na obecnej stronie
  const indexOfLastReflection = currentPage * reflectionsPerPage;
  const indexOfFirstReflection = indexOfLastReflection - reflectionsPerPage;
  const currentReflections = reflections.slice(indexOfFirstReflection, indexOfLastReflection);

  // Funkcja do przejścia na następną stronę
  const nextPage = () => {
    if (currentPage < Math.ceil(reflections.length / reflectionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Funkcja do przejścia na poprzednią stronę
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Funkcja do zmiany strony na konkretną
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <h2>Zapisane refleksje</h2>
      {reflections.length === 0 ? (
        <p>Brak zapisanych refleksji.</p>
      ) : (
        <ul className={styles.reflectionList}>
          {currentReflections.map((reflection, index) => (
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
        <button onClick={prevPage} className={`${styles.button} ${styles.homeButton}`}>Poprzednia strona</button>
        <button onClick={nextPage} className={`${styles.button} ${styles.addReflectionButton}`}>Następna strona</button>
      </div>

      {/* Paginacja */}
      <div className={styles.pagination}>
        {Array.from({ length: Math.ceil(reflections.length / reflectionsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SavedReflections;
