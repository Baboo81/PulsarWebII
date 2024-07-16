import Btn from '../../components/Btn/Btn';
import style from './souverainete.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import LouisFouché from './LouisFouché.svg';



const Souverainete = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "La souveraineté" />
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={LouisFouché} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://louisfouche.fr/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Souverainete