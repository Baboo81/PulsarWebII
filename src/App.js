import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/home/HomePage';
import Geopolitique from './views/geopolitique/Geopolitique';
import Economie from './views/economie/Economie';
import Categories from './views/categories/Categories';
import Sante from './views/sante/Sante';
import Souverainete from './views/Souverainete/Souverainete';
import Actualite from './views/Actualites/Actualite';
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
        <Route path='/categories' element={<Categories />} />
        <Route path='/sante' element={<Sante />} />
        <Route path='/souverainete' element={<Souverainete />} />
        <Route path='/actualite' element={<Actualite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
