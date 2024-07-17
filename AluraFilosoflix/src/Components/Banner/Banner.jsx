import { Link } from 'react-router-dom';
import Titulo from '../Titulo/Titulo';
import styles from './Banner.module.css';
import { useContext } from 'react';
import { ContextoGlobal } from '../ContextoGlobal/ContextoGlobal';
import imgBanner from '../../assets/img/banner-filosofiaB.jpg';
const Banner = () => {

    const { videos } = useContext(ContextoGlobal);
    //Para evitar un error cuando la lista de videos no se cargado todavía
    if (!videos || videos.length === 0) {
        return <div className={styles.cargando}><Titulo titulo={"Cargando..."} color={"#ec6d60"} /></div>
    }
    return (
        <section className={styles.contenedor} style={{ backgroundImage: `url(${imgBanner})` }}>
            <div className={styles.gradiente}>
                <div className={styles.tarjetaApaizada}>
                    <div className={styles.info}>
                        <h2 className={styles.categoria}>{videos[3].categoria}</h2>
                        <h3>{`${videos[3].titulo}`}</h3>
                        <p>{`${videos[3].descripcion}`}</p>
                    </div>
                    <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/WtD_FJHxpWM"
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Banner;