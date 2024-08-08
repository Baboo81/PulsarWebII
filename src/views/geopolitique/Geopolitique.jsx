import style from './geopolitique.module.css';
import NavBar2 from '../../components/NavBar2/NavBar2';
import { Fragment } from 'react';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';
import MainTitle from '../../components/MainTitle/MainTitle';
import IdrissAberkane from './IdrissAberkane.jpg';
import PierreHillard from './PierreHillard.jpg';
import ThierryMeyssan from './ThierryMeyssan.jpg';
import BackGround from './BackGround.jpg';


const Geopolitique = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5 mt-5">
                        <MainTitle title= "Géopolitique" />
                    </div>
                    <div className="col-md-5 p-4">
                        <div class= {style.card} >
                            <img src={IdrissAberkane} class="card-img-top rounded" alt="Image représentant un dôme de verre" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Écrivain, conférencier & chercheur</h5>
                                <p class="card-text text-muted p-2">Idriss.A possède trois doctorats dans les domaines suivants: Littérature Comparée, Diplomatie & Relations Internationales ainsi les Neurosciences.
                                Pour visiter son site personnel cliquer sur le bouton ci-dessous:
                                </p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://idrissaberkane.org/" class="btn btn-outline-primary">Site personnel d'Idriss.A</a>
                                </div>
                                <p class="card-text text-muted p-2">
                                    Idriss.A s'intérresse à une multitude de sujets autre que la géopolitique tels que les sciences, l'économie, l'I.A, ... Il développe ces thématiques avec beaucoup de rigueur et de neutralité. Idriss.A a crée Scanderia qui est un site axé sur l'apprentissage de divers sujets; économie, géopolitique, ...
                                </p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://scanderia.com/" class="btn btn-outline-primary">Aller vers le site : Scanderia</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 p-4">
                        <div class= {style.card} >
                            <img src={ThierryMeyssan} class="card-img-top rounded" alt="Image d'une salle majestueuse" />
                            <div class="card-body">
                                <h5 class="card-title mb-3 p-3">Consultant politique & Géopolitologue</h5>
                                <p class="card-text text-muted">Thierry.M, a été engagé en politique, il était dirigeant d'un parti au pouvoir de la scène politique française. grâce à ses activités liées au pouvoir, il a tisser des contacts avec des personnalités haut-placés.<br /> Thierry a été dirigeant d'une association pour l'égalité des droits, il a travaillé avec une multitude de personnalités politique du monde arabe et du Moyen-Orient aussi.<br /> Il a mis sur pied le réseau Voltaire, qui est un site d'information sur la politique internationale.</p>
                                <div className="d-grid gap-2">
                                    <a href="https://www.voltairenet.org/" class="btn btn-outline-primary">Aller vers le site: Réseau Voltaire</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 p-4">
                        <div class= {style.card} >
                            <img src={PierreHillard} class="card-img-top rounded" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title mb-3 p-3">Dr en science politique & essayiste</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid gap-2">
                                    <a href="https://scanderia.com/" class="btn btn-outline-primary">aller vers ce site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Geopolitique