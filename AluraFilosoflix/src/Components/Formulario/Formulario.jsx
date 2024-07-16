import { useState } from 'react';
import Boton from '../Boton/Boton';
import styles from './Formulario.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import CampoTexto from '../CampoTexto/CampoTexto';

const Formulario = ({ video, titulo }) => {
    const [formularioData, setFormularioData] = useState({
        categoria: "",
        titulo: "",
        descripcion: "",
        url: ""
    });

    return (
        <div className={styles.overlay}>
            <form className={styles.formulario}>
                <IoMdCloseCircleOutline className={styles.icono} />
                <h3>ACÁ VIENE EL TÍTULO</h3>

                <CampoTexto textoCampo={"Categoria"} placeHolder={"Filosofía Política"}></CampoTexto>
                <CampoTexto textoCampo={"Título"} placeHolder={"Introducción a Hegel..."}></CampoTexto>
                <CampoTexto textoCampo={"Descripción"} placeHolder={"Este video consiste en..."}></CampoTexto>
                <CampoTexto textoCampo={"URL"} placeHolder={"Pegue aquí el link"}></CampoTexto>

                <div className={styles.botones}>
                    <Boton tipo={"submit"} texto={"GUARDAR"} color={"botonAzul"}></Boton>
                    <Boton tipo={"reset"} texto={"LIMPIAR"} color={"botonBlanco"}></Boton>
                </div>
            </form>
        </div>
    );
}
export default Formulario;