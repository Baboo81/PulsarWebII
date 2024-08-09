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
                                    Idriss.A s'intérresse à une multitude de sujets autre que la géopolitique tels que les sciences, l'économie, l'I.A, ... Il développe ces thématiques avec beaucoup de rigueur et de neutralité. Idriss.A a crée Scanderia qui est un site axé sur l'apprentissage de divers sujets; économie, géopolitique, ...<br />
                                    vous pourrez trouver dans la section livres du site quelques références.
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
                                <p class="card-text text-muted">Thierry.M, a été engagé en politique, il était dirigeant d'un parti au pouvoir de la scène politique française. grâce à ses activités liées au pouvoir, il a tisser des contacts avec des personnalités haut-placés.<br /> Thierry a été dirigeant d'une association pour l'égalité des droits, il a travaillé avec une multitude de personnalités politique du monde arabe et du Moyen-Orient aussi.<br /> Il a mis sur pied le réseau Voltaire, qui est un site d'information sur la politique internationale.<br />Thierry est aussi écrivain, vous pourrez trouver dans la section livres du site quelques références.</p>
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
                                <h5 class="card-title mb-3 p-3">Dr en science politique, essayiste & conférencier</h5>
                                <p class="card-text text-muted">Pierre Hillard est un spécialiste du "mondialisme", il développe cette thématique complexe avec beaucoup de pédagogie et de clareté, il est l'auteur de plusieurs livres, vous pourrez trouver dans la section livres du site quelques références.</p>
                                <div className="d-grid gap-2">
                                    <a href="https://www.instagram.com/pierrehillard.officiel/" class="btn btn-outline-primary">Pour accéder au site sur<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"              class="bi bi-instagram mx-3" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                            </svg></a>
                                        <div>
                                        <div className="d-grid gap-2">
                                            <a href="https://x.com/PierreHillard?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="btn btn-outline-primary">Pour accéder au site<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter-x mx-3" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                            </svg></a>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <a href="https://www.youtube.com/@HillardTepaMetaTV/videos" class="btn btn-outline-primary">Pour accéder au site<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-youtube mx-3" viewBox="0 0 16 16">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                            </svg></a>
                                        </div>
                                    </div>
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