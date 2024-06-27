import style from './economie.module.css';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/TitleMain/TitleMain';
import Btn from '../../components/Btn/Btn';



const Economie = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <TitleMain title="Les sites" />
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default Economie