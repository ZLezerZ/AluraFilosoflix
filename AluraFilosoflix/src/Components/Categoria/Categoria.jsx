import { useContext } from 'react';
import styles from './Categoria.module.css';
import { ContextoGlobal } from '../ContextoGlobal/ContextoGlobal';
import Titulo from '../Titulo/Titulo';
import Carta from '../Carta/Carta';

const Categoria = ({ categoria }) => {
    const { videos } = useContext(ContextoGlobal);
    
    const videosDeCategoria = videos.filter((video) => video.categoria === categoria.titulo);

    return (
        <section className={styles.contenedor}>
            <Titulo titulo={categoria.titulo} color={categoria.color}></Titulo>
            {videosDeCategoria.length === 0 ? <span><p className={styles.sinVideos}>No hay videos disponibles en esta categoría</p></span> :(
            <ul className={styles.listaVideos}>
                {videos.filter((video) => video.categoria === categoria.titulo)
                    .map((video) => (
                        <Carta video={video} key={video.id} color={categoria.color}></Carta>
                    ))}
            </ul>
            )}
        </section>
    )
};

export default Categoria;