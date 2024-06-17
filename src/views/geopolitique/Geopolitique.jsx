import style from './geopolitique.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";

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
                            <h1>Hello</h1>
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
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art4}>

                        </article>
                    </div>
                </div>
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