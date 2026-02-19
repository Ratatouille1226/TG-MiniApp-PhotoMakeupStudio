import styles from "./app.module.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Hello World</h2>
        </header>

        <main className={styles.content}>
          {/* длинный контент */}
          {Array.from({ length: 50 }).map((_, i) => (
            <p key={i}>Контент с прокруткой {i + 1}</p>
          ))}
        </main>
      </div>

      {/* Футер вынесен **вне контейнера** */}
      <Footer />
    </div>
  );
}

export default App;
