import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";

const title = "Pulsar";
const title2 = "WEB";
const skills = [
    'Un design inspiré',
    'Contact client personnalisé',
    'Approche digitalisée'
]


function Title ({color, fontSize, fontFamily}) {
    return <h1 style = {
                {
                    color : color,
                    fontSize : fontSize,
                    fontFamily : fontFamily
                }
                        }> {title}
           </h1>
}

function Title2 ({color, fontSize, fontFamily}) {
    return <h1 style = {
                {
                    color : color,
                    fontSize : fontSize,
                    fontFamily : fontFamily
                }
                       }> {title2}
            </h1>
}

const HomePage = () => {

    return (
        <section>
            <div class="container">
                <div class="row p-3">
                    <div class="col-md-5 p-5 text-start">
                        <motion.p class="p-4" initial={{x: 0, opacity: 0}} animate={{x: 100, opacity: 1}}>
                            {skills.map(skill => (<li key={skill}> {skill} </li>))}
                        </motion.p>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div class="col-md-3">
                        <Title color="#6486ac" fontSize="16em" fontFamily="Nanum Myeongjo" />
                        <Title2 color="#6486ac" fontSize="10em" fontFamily="Nanum Myeongjo" />
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default HomePage