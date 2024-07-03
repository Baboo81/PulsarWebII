import style from './geopolitique.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/TitleMain/TitleMain';
import Btn from '../../components/Btn/Btn';

const geopolitiqueTitle = "Sources";

function Title ({color, fontSize, fontFamily}) {
    return <h1 style = {
        {
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily
        }
    }> {geopolitiqueTitle}
            </h1>
}



const Geopolitique = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                <Title color="#6486ac" fontSize="5em" fontFamily="Nanum Myeongjo" />
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>
                           
                        </article>
                        <div className="p-3">
                                <Btn url="https://scanderia.com/"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>

                        </article>
                        <div className="p-3">
                                <Btn src=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                            <article className={style.art3}>

                            </article>
                            <div className="p-3">
                                <Btn />
                        </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Geopolitique