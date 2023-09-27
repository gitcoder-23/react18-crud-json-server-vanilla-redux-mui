import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/MainHome';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <div className="App">
        <h1>ReactJs-18 CRUD App Material mui-redux-json-server-dom-6</h1>
        <Routes>
          <Route exact path="/" element={<MainHome />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
