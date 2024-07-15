import { Link } from 'react-router-dom';
import Titulo from '../Titulo/Titulo';
import styles from './Banner.module.css';
import { useContext } from 'react';
import { ContextoGlobal } from '../ContextoGlobal/ContextoGlobal';
import imgBanner from '../../assets/img/banner-filosofiaB.jpg';
const Banner = () => {

    const {videos} = useContext(ContextoGlobal);

    return (
        <section className={styles.contenedor} style={{ backgroundImage: `url(${imgBanner})`}}>
            <div className={styles.gradiente}>
                <div className={styles.tarjetaApaizada}>
                    <div className={styles.info}>
                        <Titulo titulo={"videos[x].categoria"} color={"#ec6d60"} />
                        <h3>{"videos[x].titulo"}</h3>
                        <p>{"videos[x].descripcion lor ipsumasdf  asdf asdf asdf asdf asdf asdf asdf asdf asdf asf asfd asfd asdf asdfaffaf ghdgsfhgdsfhdfgh "}</p>
                    </div>
                    {/* <Link to={`/${videos[0].id}`}> */}
                    <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/WtD_FJHxpWM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* </Link> */}

                </div>
            </div>
        </section>
    );
};

export default Banner;