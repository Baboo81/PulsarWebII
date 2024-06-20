import style from './economie.module.css';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/TitleMain/TitleMain';



const Economie = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <TitleMain title="Les sites" />
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>

                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default Economie