import style from './titleMain.module.css';
import { motion } from 'framer-motion';

const TitleMain = (props) => {
    const { title } = props;


    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

export default TitleMain

