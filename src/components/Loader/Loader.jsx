import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <div className={styles.spinner1}></div>
      </div>
    </div>
  );
};
