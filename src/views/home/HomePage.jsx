import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';


const title = "Info";
const title2 = "LIBER";
const skills = [
    'Des ressources informatives pour les chercheurs de vérité,',
    'Des thématiques allant du décorticage géopolitique à l\'ingéniérie social en passant par la santé holistique,',
    'Ce site vous aiguillera vers de l\'information libre et non soumise à la doxa.'
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
                <div class="row p-5 header">
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
                <div className="row">
                    <motion.p className="p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex hic odio labore fugit distinctio, ullam optio? Dolore modi accusamus quis voluptates enim animi voluptatem harum, eos minima numquam impedit, nam iusto voluptatum sint. Et, nostrum earum obcaecati est sed eos, tempore, possimus doloremque ipsum soluta laborum excepturi cum in ipsam. Dignissimos earum omnis ipsa saepe illo esse nesciunt obcaecati, officia facere consectetur ipsam incidunt qui repudiandae quam rerum veritatis sit! Harum deleniti iure odit laborum quisquam minima cupiditate deserunt doloremque ab! Sint ipsa pariatur velit. Nam voluptatibus vitae quaerat dolore. Quia, eveniet? Excepturi autem perspiciatis debitis quas, itaque, porro libero officia sequi natus cumque vero. Alias quidem ut tempore facilis perferendis, sunt explicabo veniam harum voluptatibus vitae quis consectetur commodi maxime qui sint dolor eos totam, exercitationem beatae fugit ea sit quisquam aliquid! Ipsa quaerat mollitia deleniti iste minima quisquam, adipisci rem soluta quae minus! Recusandae similique odit libero accusamus.
                    </motion.p>
                </div>
            </div>
        </section>
        
        

    
            
    )
}

export default HomePage