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
                <div className="row">
                    <MainTitle title="Les références" />
                    <div className="col-md-12 p-5">

                    </div>
                    <div className="col-md-12 p-5">
                        <div className="p-5">
                            <Slider2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Livres