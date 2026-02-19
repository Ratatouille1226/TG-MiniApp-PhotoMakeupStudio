import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.primaryBtn}>Главная</button>
      <button className={styles.primaryBtn}>Услуги</button>
      <button className={styles.primaryBtn}>Работы</button>
      <button className={styles.primaryBtn}>Мастера</button>
      <button className={styles.primaryBtn}>О студии</button>
    </footer>
  );
}
