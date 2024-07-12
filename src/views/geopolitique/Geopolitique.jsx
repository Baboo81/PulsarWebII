import style from './geopolitique.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';
import TitleMain from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';
import MainTitle from '../../components/MainTitle/MainTitle';


const Geopolitique = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "La géopolitique" />
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>
                           
                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
                        <div className="p-3">
                                <Btn url="https://scanderia.com/"/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>

                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
                        <div className="p-3">
                                <Btn src=""/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4">
                            <article className={style.art3}>

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

export default Geopolitique