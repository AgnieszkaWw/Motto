import  { useState } from 'react';
import styles from './GratitudePage.module.css';
import headerImage from '../../assets/mountaains.jpg';

const GratitudePage = () => {
  const [clouds, setClouds] = useState([
    { id: 1, text: "W tym momencie czuję, jak spokój wypełnia przestrzeń, a cały świat staje się prostszy i bardziej harmonijny. To uczucie lekkości i radości, jakby każda troska opadała, a serce bije w rytmie pełnym spokoju. Cudowne uczucie ulgi i odprężenia." },
  ]);

  const addCloud = () => {
    if (clouds.length < 10) {
      setClouds([...clouds, { id: clouds.length + 1, text: '' }]);
    }
  };

  const removeCloud = (id) => {
    setClouds(clouds.filter(cloud => cloud.id !== id));
  };

  const handleChange = (id, newText) => {
    setClouds(clouds.map(cloud => cloud.id === id ? { ...cloud, text: newText } : cloud));
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerImage}>
        <img src={headerImage} alt="Tatry" />
      </header>
      <main>
        <p className={styles.mainText}>
          Zamknij oczy, uśmiechnij się i po prostu poczuj, jak każda chwila staje się lżejsza. Jakie pozytywne uczucie pojawia się w tym momencie?
        </p>
        <div className={styles.cloudsContainer}>
          {clouds.map(cloud => (
            <div key={cloud.id} className={styles.cloud}>
              <textarea
                value={cloud.text}
                onChange={(e) => handleChange(cloud.id, e.target.value)}
                placeholder={cloud.id === 1 ? "" : "Za co jesteś wdzięczny?"}
                rows={4}
                className={styles.cloudInput}
              />
              <button onClick={() => removeCloud(cloud.id)} className={styles.removeBtn}>Usuń</button>
            </div>
          ))}
        </div>
        <button onClick={addCloud} className={styles.addBtn}>Dodaj chmurkę</button>
      </main>
    </div>
  );
};

export default GratitudePage;
