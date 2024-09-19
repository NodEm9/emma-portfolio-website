import './App.css';
import WelcomePage from './components/welcome-view/welcome-view';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation-view/navigation';
import Footer from './components/footer-view/footer-view';
import About from './components/about-view/about-view';
import Work from './components/work-view/work-view';
import Contact from './components/contact-view/contact-view';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
