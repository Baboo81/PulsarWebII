import style from './hobbies.module.css';
import { motion } from "framer-motion";
import Slider from '../../components/Slider/Slider';



const Hobbies = () => { 
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default Hobbies