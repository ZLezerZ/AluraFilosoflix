import styles from "./Carta.module.css";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import { useContext } from "react";

const Carta = ({ video, colorPrimario, colorSecundario }) => {

    const { eliminarVideo, abrirModalEditar } = useContext(ContextoGlobal);
    let videoURL = video.url.slice(17)

    return (
        <li className={styles.contenedor} style={{"--colorPrimario": colorPrimario,}} >
            <div className={styles.encabezado}>
                <iframe
                    src={`https://youtube.com/embed/${videoURL}`}
                    title="YouTube video player"
                    
                ></iframe>
            </div>

            <h3>{video.titulo}</h3>
            <div className={styles.contenedorBotones} style={{backgroundColor: `${colorSecundario}`}}>
                <button onClick={() => eliminarVideo(video.id)}><FaTrashCan className={styles.icono} />BORRAR</button>
                <button onClick={() => abrirModalEditar({...video})}><AiFillEdit className={styles.icono} />EDITAR</button>
                <Link to={`/${video.id}`}>
                    <button><FaExpandAlt className={styles.icono} /></button>
                </Link>
            </div>
        </li >
    );
};

export default Carta;

