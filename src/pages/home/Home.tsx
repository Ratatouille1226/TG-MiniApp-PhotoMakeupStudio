import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.about}>
          <h1>Добро пожаловать в студию ТяпЛяп</h1>
          <span>Макияж, причёски и фотосессии в одном месте</span>
        </div>
        <button className={styles.button}>Записаться</button>
      </div>
    </div>
  );
};
