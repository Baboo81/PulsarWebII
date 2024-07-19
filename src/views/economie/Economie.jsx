import style from './economie.module.css';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';
import PierreChaillot from './PierreChaillot.svg';
import PierreJovanovic from './PierreJovanovic.svg';


const Economie = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title="Économie" />
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={PierreChaillot} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.youtube.com/channel/UCX6iYvJWGOQfGsFo2KSSm-w" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                    <div class="card">
                            <img src={PierreJovanovic} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://jovanovic.com/" class="btn btn-primary">Aller vers ce site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default Economie