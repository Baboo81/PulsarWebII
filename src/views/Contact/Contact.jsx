import style from './contact.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import MainTitle from '../../components/MainTitle/MainTitle';


const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <MainTitle title="Laissez un commentaire" /> 
                    <div className="col-md-12">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact