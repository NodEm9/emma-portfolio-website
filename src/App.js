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
    </main>
  );
}

export default App;
