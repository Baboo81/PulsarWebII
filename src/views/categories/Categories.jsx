import Btn from '../../components/Btn/Btn';
import style from './categories.module.css';
import { motion } from "framer-motion";
import MainTitle from '../../components/MainTitle/MainTitle';



const Categories = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="p-5">
                        <MainTitle title= "Sources" />
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
                <div className="row">
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
                    <div className="col-md-4 p-4">
                        <article className={style.art4}>

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
                        <article className={style.art5}>

                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art6}>

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
                        <article className={style.art7}>

                        </article>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate officiis mollitia earum ullam voluptate aut odio nam, velit labore nulla numquam in voluptas consequuntur voluptatum facere qui maiores error!</p>
                        </div>
                        <div className="p-3">
                            <Btn />
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <article className={style.art8}>

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

export default Categories