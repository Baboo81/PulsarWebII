import style from './navBar.module.css';
import { Link, link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => (

    <nav class="navbar navbar-expand-lg p-4">
            <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <motion.div class="nav-item  mx-4" whileTap={{scale: 1.2}}>
                        <Link to='/home' class="nav-link" aria-current="page" href="#">Home</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4" whileTap={{scale: 1.2}}>
                        <Link to='/skills' class="nav-link" aria-current="page" href="#">Skills</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4" whileTap={{scale: 1.2}}>
                        <Link to='/hobbies' class="nav-link" aria-current="page" href="#">Hobbies</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4" whileTap={{scale: 1.2}}>
                        <Link to='/contact' class="nav-link" aria-current="page" href="#">Contact</Link>
                    </motion.div>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar