import { useContext } from "react";
import styles from "./CampoTexto.module.css";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";

const CampoTexto = ({ value, textoCampo, nombre, evento}) => {

    const inputId = `input-${nombre}`;

    return (
        <div className={styles.contenedor}>
            <label className={styles.label} htmlFor={inputId}>{textoCampo}</label>
            <input 
            required
            id={inputId}
            type="text"
            value={value}
            name={nombre}
            onChange={evento}
            />
        </div>
    ) 
};
export default CampoTexto;