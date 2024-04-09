import style from './skills.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";

const skillsTitle = "Skills";

function Title ({color, fontSize, fontFamily}) {
    return <h1 style = {
        {
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily
        }
    }> {skillsTitle}
            </h1>
}



const Skills = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-11 p-4">
                        <Title color="#6486ac" fontSize="5em" fontFamily="Nanum Myeongjo" />
                        <article className={style.art1}>
                            <h1>Hello</h1>
                            <div>
                                <img className={style.picto} src="../../public/svg/skills/html5.svg" alt="HTML" />
                                <img className={style.picto} src="../../public/svg/skills/css3.svg" alt="CSS3" />
                                <img className={style.picto} src="../../public/svg/skills/javascript.svg" alt="JS" />
                            </div>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11">
                        <article className={style.art2}>

                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11 p-4">
                        <article className={style.art4}>

                        </article>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-11">
                        <article className={style.art3}>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills