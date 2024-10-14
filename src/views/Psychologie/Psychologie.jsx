import MainTitle from '../../components/MainTitle/MainTitle';
import style from './psychologie.module.css';
import ArianeBilheran from './ArianeBilheran.jpg';

const Psychologie = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5 mt-5">
                        <MainTitle title= "Psychologie" />
                    </div>
                    <div className="col-md-5 p-4">
                    <div class={style.card}>
                            <img src={ArianeBilheran} class="card-img-top rounded" style={{height: "20rem" }} alt="Image représentant des déssins sur du sable" />
                            <div class="card-body p-2">
                                <h5 class="card-title mb-3 p-3">Normalienne, philosophe, psychologue clinicienne & docteur en psychopathologie</h5>
                                <p class="card-text text-muted p-2">Ariane est l'auteur de plusieurs livres, dont les références seront reprisent sur la page livres.<br />Ariane anime des conférences, elle est experte en psychopathologie du pouvoir. Ariane décrit avec beaucoup de précision les mécanismes du totalitarisme, son livre intitulé: "psychopathologie du totalitarisme" est une merveille à lire.</p>
                                <div className="d-grid gap-2 p-2">
                                    <a href="https://www.arianebilheran.com/" class="btn btn-outline-primary">Pour visiter le site de Ariane</a>
                                </div>
                                <div className="d-grid gap-2 p-2">
                                         <a href="https://x.com/arianebilheran?lang=fr" class="btn btn-outline-primary">Pour accéder au site<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter-x mx-3" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                    </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Psychologie