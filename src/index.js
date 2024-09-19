import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import WelcomePage from './components/welcome-view/welcome-view';
import Navigation from './components/navigation-view/navigation';
import Footer from './components/footer-view/footer-view';
import About from './components/about-view/about-view';
import Work from './components/work-view/work-view';
import Contact from './components/contact-view/contact-view';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
          <Navigation />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
