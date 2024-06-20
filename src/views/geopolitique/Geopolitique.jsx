import style from './geopolitique.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/TitleMain/TitleMain';

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
                <TitleMain title="Les sites" />
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>
                            <div>
                                
                            </div>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <article className={style.art2}>

                        </article>
                    </div>
                </div>
                <TitleMain title="Les livres"/>
                <div className="row">
                    <div className="col-md-4">
                            <article className={style.art3}>

                            </article>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Geopolitique