import Btn from '../../components/Btn/Btn';
import style from './categories.module.css';
import { motion } from "framer-motion";

const boxVariants = {
    visible: { x: 0, opacity: 1, rotate: 0 },
    hidden: { x: 100, opacity: 0, rotate: 45 },
};

const Categories = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art1}>
                            
                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art2}>
                            
                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art3}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art4}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art5}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art6}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-4">
                        <article className={style.art7}>

                        </article>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art8}>

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

export default Categories