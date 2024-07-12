import Btn from '../../components/Btn/Btn';
import style from './souverainete.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';



const Souverainete = () => { 
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-5">
                        <MainTitle title= "La souveraineté" />
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
            </div>
        </section>
    )
}

export default Souverainete