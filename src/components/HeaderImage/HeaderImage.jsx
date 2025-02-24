/* eslint-disable react/prop-types */

import styles from "./HeaderImage.module.css";
export default function HeaderImage({ headerImage }) {
  return (
    <div className={styles.crocusHeader}>
      <img src={headerImage} alt="Header" />
    </div>
  );
}