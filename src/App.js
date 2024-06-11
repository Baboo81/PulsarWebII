import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/home/HomePage';
import Geopolitique from './views/geopolitique/Geopolitique';
import Economie from './views/economie/Economie';
import Divers from './views/divers/Divers';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';







function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/geopolitique' element={<Geopolitique />} />
        <Route path='/economie' element={<Economie />} />
        <Route path='/divers' element={<Divers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
