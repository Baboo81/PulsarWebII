import style from './error404.module.css';

const Error404 = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className={style.titleError}>ERROR 404</h1>
                    <p className={style.subTitleError}>Page not found, the page you are looking for doesn't exist or has been moved !</p>
                </div>
            </div>
        </section>
    )
}

export default Error404