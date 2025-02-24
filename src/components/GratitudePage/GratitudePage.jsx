import { useNavigate } from 'react-router-dom';
import styles from './GratitudePage.module.css';
import headerImage from '../../assets/mountains.webp';
import InputReflection from '../InputReflection/InputReflection';

const GratitudePage = () => {
  const navigate = useNavigate(); // Hook do nawigacji

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerImage}>
        <img src={headerImage} alt="Tatry" />
      </header>
      <main className={styles.mainContent}>
        <p className={styles.mainText}>
          Zamknij oczy, uśmiechnij się i po prostu poczuj, jak każda chwila staje się lżejsza. Jakie pozytywne uczucie pojawia się w tym momencie?
        </p>
        <InputReflection />
      </main>
      <button onClick={handleBack} className={styles.backButton}>Powrót</button> 
    </div>
  );
};

export default GratitudePage;
