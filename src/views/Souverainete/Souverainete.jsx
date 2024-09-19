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
                    <div className="p-5 mt-5">
                        <MainTitle title= "Souveraineté" />
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={LouisFouché} class="card-img-top rounded" alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Médecin anesthésiste & réanimateur</h5>
                                <p class="card-text text-muted p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://louisfouche.fr//" class="btn btn-outline-primary">Site personnel de Louis Fouché</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Souverainete