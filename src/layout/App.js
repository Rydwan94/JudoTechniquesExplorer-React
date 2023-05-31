import { HashRouter } from "react-router-dom";

import "../styles/App.css";

import TechniquesProvider from "../context/TechniquesContext";

import Navbar from "./Navbar";
import Pages from "./Pages";

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
            
          </footer>
        </div>
      </TechniquesProvider>
    </HashRouter>
  );
}

export default App;
