import style from './navBar2.module.css';
import { Link, link } from "react-router-dom";
import InfoLiberLogo from './InfoLiberLogo.svg';

const NavBar2 = () => {


return (

    <nav class="navbar navbar-expand-lg fixed-top p-3">
    <div class="container-fluid">
        <a class="navbar-brand me-auto" src={InfoLiberLogo} />
        <img className= {style.logo} src= {InfoLiberLogo} alt='logo du site, représentant une' />
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1">
                <li class="nav-item p-4">
                    <Link to='/Home' class="nav-link active" aria-current="page" href="#">Accueil</Link>
                </li>
                <li class="nav-item dropdown p-4">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Catégories
                    </a>
                    <span class="dropdown-menu">
                        <li>
                            <Link to='/Geopolitique' class="dropdown-item" href="#">Géopolitique</Link>
                        </li>
                        <li>
                            <Link to='/Economie' class="dropdown-item" href="#">Économie</Link>
                        </li>
                        <li>
                            <Link to='/Sante' class="dropdown-item" href="#">Santé</Link>
                        </li>
                        <li>
                            <Link to='/Actualite' class="dropdown-item" href="#">Actualité</Link>
                        </li>
                        <li>
                            <Link to='/Souverainete' class="dropdown-item" href="#">Souveraineté</Link>
                        </li>
                        <li>
                            <Link to='/Psychologie' class="dropdown-item" hrer="#">Psychologie</Link>
                        </li>
                    </span>
                </li>
                <li class="nav-item p-4">
                    <Link to='/Livres' class="nav-link" href="#">Livres</Link>
                </li>
                <li class="nav-item p-4">
                    <Link to='/Contact' class="nav-link" href="#">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  </div>
</nav>
)


};

export default NavBar2