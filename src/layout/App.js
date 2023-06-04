import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import { FiChevronsUp } from "react-icons/fi";

import "../styles/App.css";

import TechniquesProvider from "../context/TechniquesContext";

import Navbar from "./Navbar";
import Pages from "./Pages";
import Footer from "./Footer";

function App() {
  const [visibleButton, setVisibleButton] = useState(false);

  const isVisible = () => {
    if (window.pageYOffset > 40) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", isVisible);

    return () => window.removeEventListener("scroll", isVisible);
  }, []);

  return (
    <HashRouter>
      <TechniquesProvider>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Pages />
          </main>
          <footer>
            <Footer />
          </footer>
          {visibleButton && (
            <button
              className= 'activeScrollBtn'
              onClick={scrollTop}
            >
              <FiChevronsUp/>
            </button>
          )}
        </div>
      </TechniquesProvider>
    </HashRouter>
  );
}

export default App;
