import Btn from '../../components/Btn/Btn';
import style from './actualite.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import AlexandrePenasse from './AlexandrePenasse.jpg';
import SalimLaïbi from './SalimLaïbi.jpg';
import JDMichel from './JDMichel.jpg';
import PierreBarnerias from './PierreBarnerias.jpg';




const Actualite = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5 mt-5">
                        <MainTitle title= "Actualités" className="box" id="box1" />
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={AlexandrePenasse} class="card-img-top rounded" alt="Image représentant des journalistes en action" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Journaliste</h5>
                                <p class="card-text text-muted p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://www.kairospresse.be/" class="btn btn-outline-primary">Site de Kairos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={SalimLaïbi} class="card-img-top" alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Chirurgien dentiste</h5>
                                <p class="card-text text-muted p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://www.lelibrepenseur.org/" class="btn btn-outline-primary">Site Le Libre Penseur</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={JDMichel} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Anthropologue & expert en santé</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.jdmichel.tv/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={PierreBarnerias} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://citizen-light.fr/actualites/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Actualite