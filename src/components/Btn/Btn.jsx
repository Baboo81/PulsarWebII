import style from './btn.module.css';

const Btn = function(props) {
    const  {title} = props;

    return (
        <button>{title}</button>
    );
    
}
    


export default Btn