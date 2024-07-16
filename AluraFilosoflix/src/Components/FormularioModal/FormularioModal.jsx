import { useContext} from 'react';
import Boton from '../Boton/Boton';
import styles from './FormularioModal.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import CampoTexto from '../CampoTexto/CampoTexto';
import { ContextoGlobal } from '../ContextoGlobal/ContextoGlobal';
import ListaOpciones from '../ListaOpciones/ListaOpciones';

const FormularioModal = ({ video, titulo, cerrarModalEditar }) => {
    const {setVideos, videos, videoAEditar, setVideoAEditar, actualizarVideo} = useContext(ContextoGlobal);

    if (!video){
        return null;
    }
    
    const manejarCambioCampo = (e) => {
        setVideoAEditar({ ...videoAEditar, [e.target.name]: e.target.value });
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        const videosActualizados = videos.map((v) => v.id === video.id ? { ...v, ...videoAEditar } : v);  //Acá genero un nuevo array con los videos actualizados
        setVideos(videosActualizados); //Acá actualizo el estado local con los videos actualizados
        
        const videoActualizado = { ...video, ...videoAEditar }; //Acá actualizo el video con los datos del formulario
        actualizarVideo(videoActualizado); // Acá actualizo la base de datos con el PUT
        cerrarModalEditar();
    };

    const limpiarFormulario = () => {
        let videoVacio = {
            categoria: "Introducción a la Filosofía",
            titulo: "",
            descripcion: "",
            url: ""
        };
        setVideoAEditar(videoVacio);
    };

    return (
        <div className={styles.overlay}>
            <form className={styles.formulario} onSubmit={manejarSubmit}>
                <IoMdCloseCircleOutline className={styles.icono} onClick={()=>cerrarModalEditar(null)} />
                <h3>{titulo}</h3>
                <ListaOpciones textoCampo={"Categoria"} value={videoAEditar.categoria} nombre={"categoria"} evento={manejarCambioCampo}/>
                {/* <CampoTexto textoCampo={"Categoria"} value={videoAEditar.categoria} nombre={"categoria"}></CampoTexto> */}
                <CampoTexto textoCampo={"Título"} value={videoAEditar.titulo} nombre={"titulo"} evento={manejarCambioCampo}></CampoTexto>
                <CampoTexto textoCampo={"Descripción"} value={videoAEditar.descripcion} nombre={"descripcion"} evento={manejarCambioCampo}></CampoTexto>
                <CampoTexto textoCampo={"URL"} value={videoAEditar.url} nombre={"url"} evento={manejarCambioCampo}></CampoTexto>

                <div className={styles.botones}>
                    <Boton tipo={"submit"} texto={"GUARDAR"} clase={"botonAzul"}></Boton>
                    <Boton tipo={"button"} texto={"LIMPIAR"} clase={"botonBlanco"} onClick={() => {limpiarFormulario()}}></Boton>
                </div>
            </form>
        </div>
    );
}
export default FormularioModal;