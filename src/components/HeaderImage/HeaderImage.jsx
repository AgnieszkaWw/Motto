/* eslint-disable react/prop-types */
import { useState } from 'react';
import CROCUS_IMG from '../../assets/c4.jpg'; // Stały obrazek
import styles from './HeaderImage.module.css';
import EditableToMotto from '../EditableToMotto/EditableToMotto';

export default function HeaderImage() {
  const [headerImage, setHeaderImage] = useState(CROCUS_IMG); // Domyślny obrazek

  // Funkcja do zmiany obrazka w nagłówku
  const changeHeaderImage = (newImage) => {
    setHeaderImage(newImage);
  };

  return (
    <div>
      {/* Nagłówek z obrazkiem */}
      <div className={styles.crocusHeader}>
        <img src={headerImage} alt="Header" /> {/* Wyświetlanie obrazka w nagłówku */}
      </div>

      {/* Komponent EditableToMotto */}
      {/* Przekazujemy funkcję changeHeaderImage jako prop */}
      <EditableToMotto changeHeaderImage={changeHeaderImage} />
    </div>
  );
}
