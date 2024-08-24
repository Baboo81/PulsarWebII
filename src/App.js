import logo from './logo.svg';
import './App.css';
import NavBar2 from './components/NavBar2/NavBar2';
import HomePage from './views/Home/HomePage';
import Geopolitique from './views/Geopolitique/Geopolitique';
import Economie from './views/Economie/Economie';
import Sante from './views/Sante/Sante';
import Actualite from './views/Actualites/Actualite';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Souverainete from './views/Souverainete/Souverainete';
import Livres from './views/Livres/Livres';
import Contact from './views/Contact/Contact';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



//Instanciation gsap:
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)





function App() {

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
        {
            opacity: 0,
            y: -200
        },
        {
            opacity: 1,
            y: 0,
        }
    )
}

useEffect(() => {
    slideInTop("#box1");
    }, [])


  return (
    <div className="App">
      <NavBar2 />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Geopolitique' element={<Geopolitique />} />
        <Route path='/Economie' element={<Economie />} />
        <Route path='/Sante' element={<Sante />} />
        <Route path='/Actualite' element={<Actualite />} />
        <Route path='/Souverainete' element={<Souverainete />} />
        <Route path='/Livres' element={<Livres />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
