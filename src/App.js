import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import WelcomePage from './components/welcome-view/welcome-view';
import Navigation from './components/navigation-view/navigation';
import Footer from './components/footer-view/footer-view';
import About from './components/about-view/about-view';
import Work from './components/work-view/work-view';
import Contact from './components/contact-view/contact-view';
import PostsView from './components/blog-posts/postOne';


function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<PostsView />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
