import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <i className="fa-solid fa-house"></i>
      </NavLink>

      <NavLink
        to="/services-studio"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </NavLink>

      <NavLink
        to="/works"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <i className="fa-solid fa-plus"></i>
      </NavLink>

      <NavLink
        to="/masters"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <i className="fa-solid fa-heart"></i>
      </NavLink>

      <NavLink
        to="/about-studio"
        className={({ isActive }) =>
          `${styles.navItem} ${isActive ? styles.active : ""}`
        }
      >
        <i className="fa-solid fa-user"></i>
      </NavLink>
    </footer>
  );
}
