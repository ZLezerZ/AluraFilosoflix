import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import styles from "./FormularioCrear.module.css";
import { useContext, useState } from "react";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Boton/Boton";

const FormularioCrear = ({titulo, descripcion}) => {

    const {videos, setVideos, crearVideo} = useContext(ContextoGlobal);

    const [nuevoVideo, setNuevoVideo] = useState({
        categoria: "",
        titulo: "",
        descripcion: "",
        url: ""
    });

    const manejarCambio = (e) => {
        const {name, value} = e.target; //acá desestructuro el name y el value del evento
        setNuevoVideo({ ...nuevoVideo, [name]: value });
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        const id = videos.length > 0 ? videos[videos.length - 1].id + 1 : 1;
        const videoConID = { ...nuevoVideo, id }; //Acá genero un nuevo objeto pero esta vez agregando el ID
        setVideos([...videos, videoConID]); //Acá actualizo el estado local con todos los videos más el nuevo video con ID
        crearVideo(videoConID); // Acá actualizo la base de datos con el POST
        limpiarFormulario();
        alert("Video creado con éxito");
    };

    const limpiarFormulario = () => {
        let videoVacio = {
            categoria: "Introducción a la Filosofía",
            titulo: "",
            descripcion: "",
            url: ""
        };
        setNuevoVideo(videoVacio);
    };

    return (
        <form className={styles.formulario} onSubmit={manejarSubmit}>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <h4>CREAR TARJETA</h4>
                <div className={styles.campos}>
                    <ListaOpciones textoCampo={"Categoria"} value={nuevoVideo.categoria} nombre={"categoria"} evento={manejarCambio}/>
                    {/* <CampoTexto textoCampo={"Categoria"} value={videoAEditar.categoria} nombre={"categoria"}></CampoTexto> */}
                    <CampoTexto textoCampo={"Título"} value={nuevoVideo.titulo} nombre={"titulo"} evento={manejarCambio}></CampoTexto>
                    <CampoTexto textoCampo={"Descripción"} value={nuevoVideo.descripcion} nombre={"descripcion"} evento={manejarCambio}></CampoTexto>
                    <CampoTexto textoCampo={"URL"} value={nuevoVideo.url} nombre={"url"} evento={manejarCambio}></CampoTexto>
                </div>
                <div className={styles.botones}>
                    <Boton tipo={"submit"} texto={"GUARDAR"} clase={"botonAzul"}></Boton>
                    <Boton tipo={"button"} texto={"LIMPIAR"} clase={"botonBlanco"} onClick={() => {limpiarFormulario()}}></Boton>
                </div>
            </form>
    );
    }

    export default FormularioCrear;