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
                            <img src={ArianeBilheran} class="card-img-top rounded" alt="Image représentant des déssins sur du sable" />
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
                </div>
            </div>
        </section>
    )
}

export default Psychologie