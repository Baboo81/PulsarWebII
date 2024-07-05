import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import MainTitle from '../../components/MainTitle/MainTitle';

const Livres = () => {
    return (
        <section>
            <div className="conatainer">
                <div className="row">
                    <MainTitle title="Les références" />
                    <div className="col-md-12">
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Livres