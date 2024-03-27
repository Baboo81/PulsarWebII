import Btn from '../../components/Btn/Btn';
import style from './contact.module.css';
import { motion } from "framer-motion";

const Contact = () => { 
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
            </div>
        </section>
    )
}

export default Contact