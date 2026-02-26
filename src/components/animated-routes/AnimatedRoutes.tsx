import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  AboutStudio,
  Masters,
  ServicesStudio,
  Works,
} from "../../pages/index";

const pageVariants = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              style={{ flex: 1, display: "flex" }}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/services-studio"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              style={{ flex: 1, display: "flex" }}
            >
              <ServicesStudio />
            </motion.div>
          }
        />

        <Route
          path="/works"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              style={{ flex: 1, display: "flex" }}
            >
              <Works />
            </motion.div>
          }
        />

        <Route
          path="/masters"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              style={{ flex: 1, display: "flex", minHeight: 0 }}
            >
              <Masters />
            </motion.div>
          }
        />

        <Route
          path="/about-studio"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              style={{ flex: 1, display: "flex" }}
            >
              <AboutStudio />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
