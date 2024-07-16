import { useContext } from "react";
import styles from "./CampoTexto.module.css";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";

const CampoTexto = ({ value, textoCampo, nombre }) => {
    const { setVideoAEditar, videoAEditar } = useContext(ContextoGlobal);

    const manejarCambio = (e) => {
        console.log(e.target.value);
        setVideoAEditar({ ...videoAEditar, [e.target.name]: e.target.value });
    };


    return (
        <div className={styles.contenedor}>
            <label className={styles.label} >{textoCampo}</label>
            <input 
            type="text"
            value={value}
            name={nombre}
            onChange={manejarCambio}
            />
        </div>
    ) 
};
export default CampoTexto;