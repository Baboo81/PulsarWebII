import style from './contact.module.css';
import NavBar2 from '../../components/NavBar2/NavBar2';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';



const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="p-5 mt-5">
                        <MainTitle title="Laissez un commentaire" /> 
                    </div>
                    <div className="col-md-12">
                        <div className="p-5">
                            <textarea className="rounded-4" name="" placeholder='Ajoutez un commentaire' id="textarea" rows={10} cols={60}></textarea>
                        </div>
                        <div className="p-3">
                            <Btn title="Envoyer" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact