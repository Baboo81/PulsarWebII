import style from './btn.module.css';

const Btn = function(props) {
    const  {url} = props;

    return (
        <button>Aller vers ce site<a href={url}></a></button>
    );
    
}
    


export default Btn