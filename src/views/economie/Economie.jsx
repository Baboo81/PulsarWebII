import style from './economie.module.css';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';



const Economie = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="p-5">
                        <MainTitle title="Sources" />
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>

                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>

                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
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