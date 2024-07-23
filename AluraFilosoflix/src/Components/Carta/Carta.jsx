import styles from "./Carta.module.css";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import { useContext } from "react";

function extraerId(url) {
    const pattern = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
    const match = url.match(pattern);
    if (match) {
        return match[1];
    }
    return null;
}

const Carta = ({ video, colorPrimario, colorSecundario }) => {

    const { eliminarVideo, abrirModalEditar } = useContext(ContextoGlobal);
    let videoId = video.url ? extraerId(video.url) : null;
    console.log(videoId);
    return (
        <li className={styles.contenedor} style={{"--colorPrimario": colorPrimario,}} >
            <div className={styles.encabezado}>
                <iframe
                    src={`https://youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    
                ></iframe>
            </div>

            <h3>{video.titulo}</h3>
            <div className={styles.contenedorBotones} style={{backgroundColor: `${colorSecundario}`}}>
                <button onClick={() => eliminarVideo(video.id)}><FaTrashCan className={styles.icono} />BORRAR</button>
                <button onClick={() => {abrirModalEditar({...video})}}><AiFillEdit className={styles.icono} />EDITAR</button>
                <Link to={`/${video.id}`}>
                    <button><FaExpandAlt className={styles.icono} /></button>
                </Link>
            </div>
        </li >
    );
};

export default Carta;

