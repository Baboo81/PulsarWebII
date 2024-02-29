import style from './navBar.module.css';
import { Link, link } from "react-router-dom";

const NavBar = () => (

    <nav class="navbar navbar-expand-lg p-4">
            <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <div class="nav-item  mx-4">
                        <Link to='/home' class="nav-link" aria-current="page" href="#">Home</Link>
                    </div>
                    <div class="nav-item  mx-4">
                        <Link to='/skills' class="nav-link" aria-current="page" href="#">Skills</Link>
                    </div>
                    <div class="nav-item  mx-4">
                        <Link to='/contact' class="nav-link" aria-current="page" href="#">Contact</Link>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar