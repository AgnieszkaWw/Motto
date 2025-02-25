import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedReflection.module.css";

const ITEMS_PER_PAGE = 4;

const SavedReflections = () => {
  const [reflections, setReflections] = useState([]);
  const [filteredReflections, setFilteredReflections] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
    savedReflections.sort((a, b) => new Date(b.date) - new Date(a.date));
    setReflections(savedReflections);
    setFilteredReflections(savedReflections);
  }, []);

  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      const selectedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
      

      const filtered = reflections.filter(reflection => reflection.date === selectedDate);
      setFilteredReflections(filtered);
    } else {
      setFilteredReflections(reflections);
    }
    setCurrentPage(0);
  }, [selectedDay, selectedMonth, selectedYear, reflections]);

  const handleDelete = (indexToDelete) => {
    const updatedReflections = reflections.filter((_, index) => index !== indexToDelete);

    if (updatedReflections.length === 0) {
      localStorage.removeItem("reflections");
    } else {
      localStorage.setItem("reflections", JSON.stringify(updatedReflections));
    }
    
    setReflections(updatedReflections);
    setFilteredReflections(updatedReflections);
  };

  const handleGoHome = () => navigate("/");
  const handleGoGratitude = () => navigate("/gratitude");

  const totalPages = filteredReflections ? Math.ceil(filteredReflections.length / ITEMS_PER_PAGE) : 0;
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedReflections = filteredReflections ? filteredReflections.slice(startIndex, startIndex + ITEMS_PER_PAGE) : [];

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

  const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString().padStart(2, "0"));
  };

  const dayOptions = generateOptions(1, 31);
  const monthOptions = generateOptions(1, 12);
  const yearOptions = generateOptions(2020, new Date().getFullYear());

  return (
    <div className={styles.container}>
      <h2>Zapisane refleksje</h2>

      <div className={styles.dateSelectors}>
        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className={styles.select}>
          <option value="">Dzień</option>
          {dayOptions.map(day => <option key={day} value={day}>{day}</option>)}
        </select>

        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className={styles.select}>
          <option value="">Miesiąc</option>
          {monthOptions.map(month => <option key={month} value={month}>{month}</option>)}
        </select>

        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className={styles.select}>
          <option value="">Rok</option>
          {yearOptions.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>

      {paginatedReflections.length > 0 && (
        <ul className={styles.reflectionList}>
          {paginatedReflections.map((reflection, index) => (
            <li key={index} className={styles.reflectionItem}>
              <h3>{reflection.date}</h3>
              <p><strong>Refleksja 1:</strong> {reflection.reflection1}</p>
              <p><strong>Refleksja 2:</strong> {reflection.reflection2}</p>
              <button onClick={() => handleDelete(index)} className={styles.deleteButton}>Usuń</button>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 0} className={styles.pageButton}>Poprzednia strona</button>
          <span>Strona {currentPage + 1} z {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className={styles.pageButton}>Następna strona</button>
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
