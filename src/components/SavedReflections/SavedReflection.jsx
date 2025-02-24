import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedReflection.module.css";

const ITEMS_PER_PAGE = 4; // Ilość refleksji na stronę

const SavedReflections = () => {
  const [reflections, setReflections] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
    savedReflections.sort((a, b) => new Date(b.date) - new Date(a.date));
    setReflections(savedReflections);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedReflections = reflections.filter((_, index) => index !== indexToDelete);

    if (updatedReflections.length === 0) {
      localStorage.removeItem("reflections");
      setReflections(null);
    } else {
      localStorage.setItem("reflections", JSON.stringify(updatedReflections));
      setReflections(updatedReflections);
    }
  };

  const handleGoHome = () => navigate("/");
  const handleGoGratitude = () => navigate("/gratitude");

  // Obliczanie paginacji
  const totalPages = reflections ? Math.ceil(reflections.length / ITEMS_PER_PAGE) : 0;
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedReflections = reflections ? reflections.slice(startIndex, endIndex) : [];

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Zapisane refleksje</h2>

      {paginatedReflections.length > 0 && (
        <ul className={styles.reflectionList}>
          {paginatedReflections.map((reflection, index) => (
            <li key={index} className={styles.reflectionItem}>
              <h3>{reflection.date}</h3>
              <p><strong>Refleksja 1:</strong> {reflection.reflection1}</p>
              <p><strong>Refleksja 2:</strong> {reflection.reflection2}</p>
              <button
                onClick={() => handleDelete(index)}
                className={styles.deleteButton}
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Paginacja */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 0} className={styles.pageButton}>
            Poprzednia strona
          </button>
          <span>Strona {currentPage + 1} z {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className={styles.pageButton}>
            Następna strona
          </button>
        </div>
      )}

      <div className={styles.buttonsContainer}>
        <button onClick={handleGoHome} className={`${styles.button} ${styles.homeButton}`}>Powrót na stronę główną</button>
        <button onClick={handleGoGratitude} className={`${styles.button} ${styles.addReflectionButton}`}>Dodaj refleksję</button>
      </div>
    </div>
  );
};

export default SavedReflections;
