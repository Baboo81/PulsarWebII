import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './views/home/HomePage';
import Skills from './views/skills/Skills';
import Hobbies from './views/hobbies/Hobbies';
import Contact from './views/contact/Contact';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
