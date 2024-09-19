import './App.css';
import WelcomePage from './components/welcome-view/welcome-view';
import Navigation from './components/navigation-view/navigation';
import Footer from './components/footer-view/footer-view';
import About from './components/about-view/about-view';
import Work from './components/work-view/work-view';
import Contact from './components/contact-view/contact-view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
