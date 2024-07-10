import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/Home/HomePage';
import Geopolitique from './views/Geopolitique/Geopolitique';
import Economie from './views/Economie/Economie';
import Categories from './views/Categories/Categories';
import Sante from './views/Sante/Sante';
import Actualite from './views/Actualites/Actualite';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Souverainete from './views/Souverainete/Souverainete';
import Livres from './views/Livres/Livres';









function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Geopolitique' element={<Geopolitique />} />
        <Route path='/Economie' element={<Economie />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Sante' element={<Sante />} />
        <Route path='/Actualite' element={<Actualite />} />
        <Route path='/Souverainete' element={<Souverainete />} />
        <Route path='/Livres' element={<Livres />} />
      </Routes>
    </div>
  );
}

export default App;
