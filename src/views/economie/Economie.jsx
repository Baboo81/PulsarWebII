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
                            <img src={PierreChaillot} class="card-img-top rounded" style={{height: "20rem" }} alt="Image représentant des courbes sur un graphique" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Statisticien</h5>
                                <p class="card-text text-muted p-2">Pierre est l'auteur d'un excellent livre: COVID 19 ce que révèlent les chiffres officiels, ayant collecté et analysé pendant plusieurs années les chiffres concernant la crise du Covid 19, suite à ces analyses, il a vite réalisé que le narratif officiel ne cadrait pas avec la réalité des chiffres.</p>
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
                            <img src={PierreJovanovic} class="card-img-top rounded" style={{height: "20rem" }} alt="Image représentant un livre ouvert en éventail" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Journaliste & essayiste</h5>
                                <p class="card-text text-muted p-2">Pierre est un journaliste spécialisé dans le domaine économique, il décortique l'actualité économique avec beaucoup de clarté et de pertinence.<br />Il est l'auteur de plusieurs livres: 666, 777, Enquête sur les anges gardien, ... Vous pourrez trouver dans la section livresdu site quelques références. </p>
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