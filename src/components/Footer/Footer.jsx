import style from './footer.module.css';

const Footer = () => (

    <footer className="container">
        <div className="row">
            <a href="https://github.com/Baboo81"><img className={style.pictos} src="../../public/svg/footer/PictoGit.svg" alt="Icone GitHub"></img></a>
            <a href="https://www.linkedin.com/in/chris-rodriguez-perez-609716100/"><img className={style.pictos} src="../../public/svg/footer/PictoLinkedIn.svg" alt="Icone LinkedIn"></img></a>
            <a href="mailto:chrisrodirguez@hotmail.be"><img className={style.pictos} src="../../public/svg/footer/PictoMail.svg" alt="Icone Email"></img></a>
        </div>
    </footer>


);

export default Footer