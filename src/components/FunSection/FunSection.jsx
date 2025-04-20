import React from 'react';
import styles from './FunSection.module.scss';

export const FunSection = () => {
  return (
    <section id="fun" className={styles.funSection}>
      <h2 className={styles.title} style={{ fontSize: '30px' }}>when i'm not coding...</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          you'll probably find me at a cat cafe :)
        </div>
        <div className={styles.image}>
          <img 
            src="/placeholder-cats.jpg" 
            alt="Cat Cafe Vibes" 
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          i also like to play badminton occasionally at UABC!
        </div>
        <div className={styles.image}>
          <img 
            src="/placeholder-badminton.jpg" 
            alt="uabc court" 
          />
        </div>
      </div>
    </section>
  );
}; 