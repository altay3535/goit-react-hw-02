import styles from './options.module.css';

function Options({ onUpdate, onReset, total }) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => onUpdate('good')}>Good</button>
      <button className={styles.btn} onClick={() => onUpdate('neutral')}>Neutral</button>
      <button className={styles.btn} onClick={() => onUpdate('bad')}>Bad</button>
      
      {total > 0 && (
        <button className={`${styles.btn} ${styles.btnReset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;