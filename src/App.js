import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import Upload from './Upload';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home 🎉</Link>
        <Link to="/gallery" className="nav-link">Gallery 📸</Link>
        <Link to="/about" className="nav-link">About Atharva ❤️</Link>
        <Link to="/upload" className="nav-link">Upload Memories 🎁</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
