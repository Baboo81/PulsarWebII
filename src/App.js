import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/home/HomePage';
import Skills from './views/skills/Skills';
import Hobbies from './views/hobbies/Hobbies';
import Contact from './views/contact/Contact';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Count from './components/Count/Count';





function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/geopolitique' element={<Géopolitique />} />
        <Route path='/economie' element={<Économie />} />
        <Route path='/divers' element={<Divers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
