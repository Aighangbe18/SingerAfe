// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "framer-motion"; // <-- Import Transition and Variants

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer"; // Import the new AudioPlayer
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Stage from "./pages/Stage";
import BackStage from "./pages/BackStage";
import Band from "./pages/Band";
import BehindStudio from "./pages/BehindStudio";
import CityChoir from "./pages/CityChoir";
import Crowd from "./pages/Crowd";
import Festivals from "./pages/Festivals";
import Strings from "./pages/Strings";
import ScrollToTop from "./components/ScrollTop";

// Define page transition variants
const pageVariants: Variants = {
  // <-- Explicitly type pageVariants as Variants
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

// Explicitly type pageTransition as Transition (uppercase T)
const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.7,
};

// Component to handle route-based animations
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/booking"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Booking />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Gallery />
            </motion.div>
          }
        />
        <Route
          path="/stage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Stage />
            </motion.div>
          }
        />
        <Route
          path="/back-stage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <BackStage />
            </motion.div>
          }
        />
        <Route
          path="/band"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Band />
            </motion.div>
          }
        />
        <Route
          path="/behind-studio"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <BehindStudio />
            </motion.div>
          }
        />
        <Route
          path="/city-choir"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <CityChoir />
            </motion.div>
          }
        />
        <Route
          path="/crowd"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Crowd />
            </motion.div>
          }
        />
        <Route
          path="/festivals"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Festivals />
            </motion.div>
          }
        />
        <Route
          path="/strings"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Strings />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        {/* Add a 404 page if you like */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes /> {/* Use the AnimatedRoutes component */}
        </main>
        <Footer />
        <AudioPlayer /> {/* Global Audio Player */}
      </div>
    </Router>
  );
}

export default App;
