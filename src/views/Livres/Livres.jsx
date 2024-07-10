import style from './livres.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import Slider from '../../components/Slider/Slider';

const Livres = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <MainTitle title="Les références" />
                    <div className="col-md-12 p-5">
                        <div className="p-5">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Livres