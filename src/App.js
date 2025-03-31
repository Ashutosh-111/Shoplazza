import './App.css';
import Card from './components/Card/Card';
import Footer from './layouts/Footer/Footer';
import NavBar from './layouts/NavigationBar/NavBar';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current location (path)

  return (
    <div className="App">
      {/* The NavBar will be present on all pages */}
      <NavBar />

      {/* Define the routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

      </Routes>

      {/* Conditionally render the Footer, don't show it on the Login page */}
      {(location.pathname !== '/login' && location.pathname !=='/about') && <Footer />}
    </div>
  );
}

export default App;
