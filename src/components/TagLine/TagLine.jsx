import style from './tagLine.module.css';

const TagLine = (props) => {

    const { title } = props;


    return (
        <div className= {style.tagLine} >
            <h1> {title} </h1>
        </div>
        
    );

};

export default TagLine