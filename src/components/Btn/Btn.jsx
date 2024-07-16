import style from './btn.module.css';

const Btn = function(props) {
    const  {url} = props;

    return (
        <a href={url}>Aller vers ce site</a>
    );
    
}
    


export default Btn