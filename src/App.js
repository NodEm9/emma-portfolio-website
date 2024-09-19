import { Col, Row } from 'react-bootstrap';
import './App.css';
import WelcomePage from './components/welcome-view/welcome-view';

function App() {
  return (
    <Row className="App justify-content-center">
      <Col md={12}>
        <WelcomePage />
      </Col>
    </Row>
  );
}

export default App;
