import Btn from '../../components/Btn/Btn';
import style from './sante.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';
import EmaKrusi from './EmaKrusi.svg';
import IreneGrosjean from './IreneGrosjean.svg';
import JjCrevecoeur from './JjCrevecoeur.svg';
import MarieSophieL from './MarieSophieL.svg';
import ThierryCasasnovas from './ThierryCasasnovas.svg';



const Sante = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "La santé" />
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={EmaKrusi} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://emakrusi.com/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={IreneGrosjean} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.youtube.com/channel/UCX6iYvJWGOQfGsFo2KSSm-w" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={JjCrevecoeur} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://formations.emergences.net/login" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={MarieSophieL} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://mariesophiel.com/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <div class="card">
                            <img src={ThierryCasasnovas} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.rgnr.tv/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sante