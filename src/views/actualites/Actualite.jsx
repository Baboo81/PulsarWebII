import Btn from '../../components/Btn/Btn';
import style from './actualite.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import AlexandrePenasse from './AlexandrePenasse.svg';
import SalimLaïbi from './SalimLaïbi.svg';



const Actualite = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "L'actualité" />
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={AlexandrePenasse} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.kairospresse.be/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={SalimLaïbi} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.lelibrepenseur.org/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Actualite