import './App.css';
import WelcomePage from './components/welcome-view/welcome-view';
import Navigation from './components/navigation-view/navigation';
import Footer from './components/footer-view/footer-view';



function App() {
  return (
    <main>
      <Navigation />
      <WelcomePage />
      <Footer />
      <div className='bg-dark p-1 text-center text-white'>
        <p className='text-white m-2'>&copy; Copyright 2024</p>
        <p className='text-white'>Designed and Develop by Emmanuel Nodolomwanyi</p>
      </div>
    </main>
  );
}

export default App;
