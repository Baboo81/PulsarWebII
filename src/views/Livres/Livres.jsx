import style from './livres.module.css';
import NavBar2 from '../../components/NavBar2/NavBar2';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import Slider2 from '../../components/Slider2/Slider2';

const Livres = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5 mt-5">
                        <MainTitle title="Les références" />
                    </div>
                    <div className="col-md-7 p-5">
                        <article className="p-5">
                            <Slider2 />
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Livres