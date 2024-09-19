import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from './components/navigation-view/navigation';
import ContactView from './components/contact-view/contact-view';
import WorkView from './components/work-view/work-view';
import AboutView from './components/about-view/about-view';
import FooterView from './components/footer-view/footer-view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='contact' element={<ContactView />} />
          <Route path='work' element={<WorkView />} />
          <Route path='about' element={<AboutView />} />
        </Routes>
      </BrowserRouter>
      <FooterView />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
