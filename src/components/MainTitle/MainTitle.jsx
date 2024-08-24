import style from './mainTitle.module.css';
import { motion } from 'framer-motion';



const MainTitle = (props) => {

    const { title } = props;


    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

export default MainTitle

