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

function Title ({color, fontSize}) {
    return <h1 style = {
                {
                    color : color,
                    fontSize : fontSize
                }
                        }> {title}
           </h1>
}

function Title2 ({color, fontSize}) {
    return <h1 style = {
                {
                    color : color,
                    fontSize : fontSize
                }
                       }> {title2}
            </h1>
}

const HomePage = () => {

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <motion.p class="p-4 mx-5" initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}}>
                            {skills.map(skill => (<li key={skill}> {skill} </li>))}
                        </motion.p>
                    </div>
                    <div class="col-md-6">
                        <Title color="#6486ac" fontSize="16em" />
                        <Title2 color="#6486ac" fontSize="10em"/>
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default HomePage