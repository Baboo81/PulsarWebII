import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';


const title = "Info";
const title2 = "LIBER";
const skills = [
    'Des ressources informatives pour les chercheurs de vérité,',
    'Des thématiques allant du décorticage géopolitique à l\'ingéniérie social en passant par la santé holistique,',
    'Ce site vous aiguillera vers de l\'information libre et non soumise à la doxa.'
]




function Title ({color, fontSize, fontFamily}) {
    return <h2 style = {
                {
                    color : color,
                    fontSize : fontSize,
                    fontFamily : fontFamily
                }
                        }> {title}
           </h2>
}

function Title2 ({color, fontSize, fontFamily}) {
    return <h2 style = {
                {
                    color : color,
                    fontSize : fontSize,
                    fontFamily : fontFamily
                }
                       }> {title2}
            </h2>
}

const HomePage = () => {

    return (
    
        <section>
            <div class="container">
                <div class="row p-5" className={style.header}>
                    <motion.div class="col-md-4" animate={{
                        x: 0,
                        backgroundColor: "#bf152d",
                        transitionEnd: {
                            display: "non",
                        }
                    }}>
                        <Title color="#fff" fontSize="10em" fontFamily="Bodoni Moda"  />
                        <Title2 color="#fff" fontSize="6em" fontFamily="Bodoni Moda" />
                    </motion.div>
                    <div className="col-md-1">
                    
                    </div>
                    <div class="col-md-6 p-5 text-start">
                        <motion.p class="p-4" initial={{x: 0, opacity: 0}} animate={{x: 100, opacity: 1}}>
                            {skills.map(skill => (
                                <li key={skill}> {skill} </li>
                                )
                            )}
                        </motion.p>
                    </div>
                </div>
                <div className="row">
                    <MainTitle title="Une information de qualité" />
                    <div className="justify-content-left p-4">
                        <div className={style.guillemetsO}></div>
                        <motion.p className="text-muted">Info Liber a pour objectif d'apporter un nouvel angle de vue sur des thématiques qui sont de nos jours manipulées par les médias de masse. La sélèction des différentes plate-formes est basée sur des critères tels que ; l'honnêteté intéllectuelle mais aussi sur l'intégrité de ces auteurs. Á l'heure actuelle les médias de grand chemin ne jouissent plus de l'indépendance dont ils devraient être garants, d'où l'intérrêt d'avoir mis sur pied ce site qui vous permettra de découvrir une série de plate-forme qui oeuvre dans le sens de la souverainté intelectuelle, le libre arbitre.
                        </motion.p>
                        <div className={style.guillemetsF}></div>
                        <p className="text-muted">-- <i>Fruit des recherches d'une chercheuse de vérité</i> --</p>
                    </div>
                </div>
            </div>
        </section>
        
        

    
            
    )
}

export default HomePage