import style from './economie.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';
import PierreChaillot from './PierreChaillot.svg';
import PierreJovanovic from './PierreJovanovic.svg';


const Economie = () => { 


    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5 mt-5">
                        <MainTitle title="Économie" className="box" id="box1" />
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={PierreChaillot} class="card-img-top rounded" alt="Image représentant des courbes sur un graphique" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Statisticien</h5>
                                <p class="card-text text-muted p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2">
                                    <a href="https://www.youtube.com/channel/UCX6iYvJWGOQfGsFo2KSSm-w" class="btn btn-outline-primary">Aller vers le site: Décoder l'éco</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 p-4">
                    <div class={style.card}>
                            <img src={PierreJovanovic} class="card-img-top rounded" alt="Image représentant un livre ouvert en éventail" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Journaliste & essayiste</h5>
                                <p class="card-text text-muted p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2">
                                    <a href="https://jovanovic.com/" class="btn btn-outline-primary">Aller vers le site officielle de Pierre</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default Economie