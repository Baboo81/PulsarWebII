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
                    <motion.div class="nav-item  mx-4  my-3" whileTap={{scale: 1.2}}>
                        <Link to='/home' class={style.links} aria-current="page" href="#">Home</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4  my-3" whileTap={{scale: 1.2}}>
                        <Link to='/geopolitique' class={style.links} aria-current="page" href="#">Géopolitiques</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4  my-3" whileTap={{scale: 1.2}}>
                        <Link to='/economie' class={style.links} aria-current="page" href="#">Économie</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4  my-3" whileTap={{scale: 1.2}}>
                        <Link to='/divers' class={style.links} aria-current="page" href="#">Divers</Link>
                    </motion.div>
                    <motion.div class="nav-item  mx-4 my-3" whileTap={{scale: 1.2}}>
                        <Link to='/contact' class={style.links} aria-current="page" href="#">Contact</Link>
                    </motion.div>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar