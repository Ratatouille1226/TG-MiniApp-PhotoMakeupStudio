import styles from "./app.module.css";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* <header className={styles.header}>
          <h2>Hello World</h2>
        </header> */}

        <main className={styles.content}>
          <AnimatedRoutes />
        </main>
      </div>

      {/* Футер вынесен **вне контейнера** */}
      <Footer />
    </div>
  );
}

export default App;
