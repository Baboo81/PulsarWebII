import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';


const title = "Info";
const title2 = "LIBER";
const skills = [
    'Des ressources informatives pour les chercheurs de vérité',
    'Des thématiques allant du décorticage géopolitique à l\'ingéniérie social en passant par la santé holistique',
    ''
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
                    <div class="col-md-3">
                        <Title color="#6486ac" fontSize="16em" fontFamily="Nanum Myeongjo" />
                        <Title2 color="#6486ac" fontSize="16em" fontFamily="Nanum Myeongjo" />
                    </div>
                    <div className="col-md-3">
                    
                    </div>
                    <div class="col-md-5 p-5 text-start">
                        <motion.p class="p-4" initial={{x: 0, opacity: 0}} animate={{x: 100, opacity: 1}}>
                            {skills.map(skill => (
                                <li key={skill}> {skill} </li>
                                )
                            )}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
        
        

    
            
    )
}

export default HomePage