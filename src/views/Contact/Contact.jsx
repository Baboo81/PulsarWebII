import style from './contact.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';


const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <MainTitle title="Laissez un commentaire" /> 
                    <div className="col-md-12">
                        <div className="p-5">
                            <textarea name="" id="textarea" rows={10} cols={60}></textarea>
                        </div>
                        <div className="p-3">
                            <Btn title="Envoyer" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact