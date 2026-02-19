import { Routes, Route } from "react-router";
import styles from "./app.module.css";
import Footer from "./components/footer/Footer";
import { Home, AboutStudio, Masters, ServicesStudio, Works } from "./pages";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* <header className={styles.header}>
          <h2>Hello World</h2>
        </header> */}

        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services-studio" element={<ServicesStudio />} />
            <Route path="/works" element={<Works />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/about-studio" element={<AboutStudio />} />
          </Routes>
        </main>
      </div>

      {/* Футер вынесен **вне контейнера** */}
      <Footer />
    </div>
  );
}

export default App;
