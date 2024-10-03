import style from './tagLine.module.css';

const TagLine = (props) => {

    const { title } = props;


    return (
        <>
            <h4> {title} </h4>
        </>
    );

};

export default TagLine