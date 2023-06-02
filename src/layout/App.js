import { HashRouter } from "react-router-dom";

import "../styles/App.css";

import TechniquesProvider from "../context/TechniquesContext";

import Navbar from "./Navbar";
import Pages from "./Pages";
import Footer from "./Footer";

function App() {
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
        </div>
      </TechniquesProvider>
    </HashRouter>
  );
}

export default App;
