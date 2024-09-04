import Btn from '../../components/Btn/Btn';
import style from './sante.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import EmaKrusi from './EmaKrusi.jpg';
import NellyGrosjean from './NellyGrosjean.jpg';
import JjCrevecoeur from './JjCrevecoeur.jpg';
import MarieSophieL from './MarieSophieL.jpg';
import ThierryCasasnovas from './ThierryCasasnovas.jpg';
import RobinDesToits from './RobinDesToits.jpg';



const Sante = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "Santé" />
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={EmaKrusi} class="card-img-top rounded" alt="Image représentant des déssins sur du sable" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Psychopraticienne & formatrice</h5>
                                <p class="card-text text-muted p-2">Ema est connue pour ses travaux sur la naissance, le couple ainsi que ses prises de positions publiques sur l'autonomie, l'esprit critique, la manipulation de l'information et la psychologie.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://classic.emakrusi.com/" class="btn btn-outline-primary">Pour visiter le site de Ema</a>
                                </div>
                                <p class="card-text text-muted p-2">Ema s'est spécialisée dans la périnatalité en proposant un programme d'accompagnement aux futurs parents. Dans ce cadre là, Ema à lancer un site spécialement dédié à cette thématique.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://emakrusi.com/" class="btn btn-outline-primary">Site Mastermind de la naissance</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={NellyGrosjean} class="card-img-top rounded" alt="Image d'un champ de lavande" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3">Naturopathe, aromathérapeute & formatrice</h5>
                                <p class="card-text text-muted p-2">Nelly est une pionnière dans le domaine de la santé au naturel, spécialisée en aromathérapie elle propose des formations ainsi que des cures détox et une multitude d'informations pour se maintenir en santé. Elle est l'auteur de plusieurs livres que vous pourrez trouver dans la section livre du site.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://nellygrosjean.com/" class="btn btn-outline-primary">Pour visiter le site de Nelly</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={JjCrevecoeur} class="card-img-top rounded" alt="Image représentant un papillon ainsi que des pierres sur du sable" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Formateur & physicien</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://formations.emergences.net/login" class="btn btn-outline-primary">Pour aller vers le site Jean-Jacques</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={MarieSophieL} class="card-img-top rounded" alt="" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Naturopathe & Raw Chef</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://mariesophiel.com/" class="btn btn-outline-primary">Pour aller vers l'instant cru</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={ThierryCasasnovas} class="card-img-top rounded" alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Card title</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://www.rgnr.tv/" class="btn btn-outline-primary">Pour aller vers RGNR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div class={style.card}>
                            <img src={RobinDesToits} class="card-img-top rounded" alt="Image représentant une antenne relais" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Pollution élèctromagnétique liée aux réseaux téléphoniques</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://www.robindestoits.org/" class="btn btn-outline-primary">Pour aller vers Robin des toits</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sante