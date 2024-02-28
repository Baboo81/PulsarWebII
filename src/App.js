import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/home/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
