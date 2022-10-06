import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Teams } from "./components/Teams";
import "./app.css";
import { Players } from "./components/Players";

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <h1>React Router DOM</h1>
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/players">Players</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>
        
      </Router>

      <footer>Copyright &copy; 2022</footer>
    </div>
  );
}

export default App;
