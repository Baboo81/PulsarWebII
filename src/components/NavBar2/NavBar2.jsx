import style from './navBar2.module.css';
import { Link, link } from "react-router-dom";
import InfoLiberLogo from './InfoLiberLogo.svg';

const NavBar2 = () => (

<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand me-auto" src={InfoLiberLogo} >Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                    <Link to='/Home' class="nav-link active" aria-current="page" href="#">Accueil</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Catégories
                    </a>
                    <ul class="dropdown-menu">
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
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
  </div>
</nav>

);

export default NavBar2