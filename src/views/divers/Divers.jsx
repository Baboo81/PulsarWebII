import Btn from '../../components/Btn/Btn';
import style from './divers.module.css';
import { motion } from "framer-motion";

const boxVariants = {
    visible: { x: 0, opacity: 1, rotate: 0 },
    hidden: { x: 100, opacity: 0, rotate: 45 },
};

const Divers = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-5">
                        <article className="p-3">
                            <h1>Adresse</h1>
                
                            <p>Rue champ rodange 14, 1410 Waterloo</p>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="vstack gap-2">
                            <motion.div className={style.box} initial={{opacity: 0}} animate={{opacity: 1}}>1</motion.div>
                            <motion.div className={style.box} initial={{opacity: 0}} animate={{opacity: 1}}>2</motion.div>
                            <motion.div className={style.box} initial={{opacity: 0}} animate={{opacity: 1}}>3</motion.div>
                        </div>
                        <div>
                            <button>Afficher / Masquer</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Divers