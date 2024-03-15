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
                    <div className="col-md-12 p-4">
                        <Title color="#6486ac" fontSize="5em" fontFamily="Nanum Myeongjo" />
                        <article className={style.art1}>

                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <article>

                        </article>
                    </div>
                    <div className="col-md-6">
                        <article>

                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 p-4">
                        <article>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills