import styles from "./CampoTexto.module.css";

const CampoTexto = ({ textoCampo, placeHolder }) => {
    return (
            <label className={styles.campo} aria-placeholder={placeHolder}></label>
                <input type="text" />
    )
};
export default CampoTexto;