import React from 'react';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles['background-image']} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.First}>Welcome to Worldwide</p>
        <p className={styles.middle}>Cosmetology And Wellness</p>
        <p className={styles.last}>Accreditation Pvt Ltd</p>
        <p className={styles.para}>Welcome to WCWA, the premier destination for beauty education, professional development, and industry networking.</p>
        <button
        className={styles.btn}>
          Our Services
        </button>
      </div>
    </div>
  );
};

export default HomePage;
