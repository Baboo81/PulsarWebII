import style from './navBar.module.css';

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
                    <div class="nav-item mx-4">
                        <Link to='/other' class="nav-link" href="#">Other</Link>
                    </div>
                    <div class="nav-item mx-4">
                        <Link to='/contact' class="nav-link" href="#">Contact</Link>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar