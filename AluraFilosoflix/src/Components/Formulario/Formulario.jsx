import { useContext, useState } from 'react';
import Boton from '../Boton/Boton';
import styles from './Formulario.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import CampoTexto from '../CampoTexto/CampoTexto';
import { ContextoGlobal } from '../ContextoGlobal/ContextoGlobal';

const Formulario = ({ video, titulo, cerrarModalEditar }) => {
    if (!video){
        return null;
    }
    const {setVideos, videos, videoAEditar} = useContext(ContextoGlobal);

    const manejarSubmit = (e) => {
        e.preventDefault();
        const videosActualizados = videos.map((v) => v.id === video.id ? { ...v, ...videoAEditar } : v);
        setVideos(videosActualizados);
        //aca debo hacer el método PUT
        cerrarModalEditar();
    };
    return (
        <div className={styles.overlay}>
            <form className={styles.formulario} onSubmit={manejarSubmit}>
                <IoMdCloseCircleOutline className={styles.icono} onClick={()=>cerrarModalEditar(null)} />
                <h3>{titulo}</h3>

                <CampoTexto textoCampo={"Categoria"} value={video.categoria} nombre={"categoria"}></CampoTexto>
                <CampoTexto textoCampo={"Título"} value={video.titulo} nombre={"titulo"}></CampoTexto>
                <CampoTexto textoCampo={"Descripción"} value={video.descripcion} nombre={"descripcion"}></CampoTexto>
                <CampoTexto textoCampo={"URL"} value={video.url} nombre={"url"}></CampoTexto>

                <div className={styles.botones}>
                    <Boton tipo={"submit"} texto={"GUARDAR"} clase={"botonAzul"}></Boton>
                    <Boton tipo={"reset"} texto={"LIMPIAR"} clase={"botonBlanco"}></Boton>
                </div>
            </form>
        </div>
    );
}
export default Formulario;