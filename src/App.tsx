import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Resources from "./pages/Resources";
import Agency from "./pages/Agency";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <Work />
              </PageTransition>
            }
          />
          <Route
            path="/resources"
            element={
              <PageTransition>
                <Resources />
              </PageTransition>
            }
          />
          <Route
            path="/agency"
            element={
              <PageTransition>
                <Agency />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
