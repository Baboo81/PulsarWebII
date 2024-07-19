import style from './geopolitique.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';
import MainTitle from '../../components/MainTitle/MainTitle';
import IdrissAberkane from './IdrissAberkane.svg';
import PierreHillard from './PierreHillard.svg';
import ThierryMeyssan from './ThierryMeyssan.svg';


const Geopolitique = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "Géopolitique" />
                    </div>
                    <div className="col-md-4 p-4">
                        <div class= {style.card} >
                            <img src={IdrissAberkane} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title mb-3">Idriss Aberkane</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://scanderia.com/" class="btn btn-outline-danger">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <div class= {style.card} >
                            <img src={ThierryMeyssan} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title mb-3">Thierry Meyssan</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://scanderia.com/" class="btn btn-outline-danger">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <div class= {style.card} >
                            <img src={PierreHillard} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title mb-3">Pierre Hillard</h5>
                                <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://scanderia.com/" class="btn btn-outline-danger">allers vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Geopolitique