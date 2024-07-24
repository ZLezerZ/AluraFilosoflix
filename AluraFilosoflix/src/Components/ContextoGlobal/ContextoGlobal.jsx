import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext();

const ContextoGlobalProvider = ({ children }) => {

//Acá manejo los estados
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([
        {
            titulo: "Introducción a la Filosofía",
            colorPrimario: "#ffba05",
            colorSecundario: "rgba(255, 186, 5, 0.6)"
        },
        {
            titulo: "Filosofía Política",
            colorPrimario: "#ec6d60",
            colorSecundario: "rgba(236, 109, 96, 0.6)"
        },
        {
            titulo: "Estética",
            colorPrimario: "#6bd1ff",
            colorSecundario: "rgba(107, 209, 255, 0.6)"
        },
        {
            titulo: "Epistemología",
            colorPrimario: "#00c86f",
            colorSecundario: "rgba(0, 200, 111, 0.6)"
        }
    ]);
    const [videoAEditar, setVideoAEditar] = useState(null);
//Acá manejo los estados

//Lógica para el modal formulario de edición
    const abrirModalEditar = (video) => {
        setVideoAEditar(video);
    };

    const cerrarModalEditar = () => {
        setVideoAEditar(null);
    };
//Lógica para el modal formulario de edición


//Funciones para la API  - GET, POST, PUT, DELETE
//GET
useEffect(() => {
    const getData = async () => {
        try {
            // const respuesta = await fetch('https://my-json-server.typicode.com/ZLezerZ/AluraFilosoflix/db'); //cuando usa una url de typicode se usa data.videos
            const respuesta = await fetch('http://localhost:3001/videos'); //cuando se corre en local se setean los videos con el array data directamente
            const data = await respuesta.json();
            setVideos(data); //
        } catch (error) {
            console.error('Error al traer los videos:', error);
        }
    };
    getData();
}, []);

if (!videos) {
    return <div>Loading...</div>;
}
//Función para reenderizar urls de videos
function extraerId(url) {
    const pattern = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
    const match = url.match(pattern);
    if (match) {
        return match[1];
    }
    return null;
}
//Función para reenderizar urls de videos

//POST
    const crearVideo = async (video) => {
        try {
            const respuesta = await fetch('http://localhost:3001/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            });
            if (!respuesta.ok) {
                throw new Error('Se ha producido un error al crear el video');
            }
            const videoCreado = await respuesta.json();
            setVideos([...videos, videoCreado]);
        } catch (error) {
            alert('No fue posible crear el video: ', error);
        }
        console.log("Video creado: ", video);
    };

//PUT
    const actualizarVideo = async (video) => {
        console.log("video a modificar", video)
        try {
            const respuesta = await fetch(`http://localhost:3001/videos/${video.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            });
            if (!respuesta.ok) {
                throw new Error('Se ha producido un error al actualizar el video');
            }
            const videosActualizados = videos.map((v) => v.id === video.id ? video : v);
            setVideos(videosActualizados);
        } catch (error) {
            alert('No fue posible actualizar el video: ', error);
        }
        console.log("Video actualizado: ", video);
    };

//DELETE
    const eliminarVideo = async (id) => {
        try {
            const respuesta = await fetch(`http://localhost:3001/videos/${id}`, {
                method: 'DELETE'
            });
            if (!respuesta.ok) {
                throw new Error('Se ha producido un error al eliminar el video');
            }
            setVideos(videos.filter((video) => video.id !== id));
        } catch (error) {
            alert('No fue posible eliminar el video: ', error);
        }
    }
//Funciones para la API  - GET, POST, PUT, DELETE

    return (
        <ContextoGlobal.Provider value={{ 
            videos, setVideos, categorias, setCategorias, // Para manejar los estados más generales
            eliminarVideo, actualizarVideo, crearVideo,  // Para manejar funciones API
            videoAEditar, setVideoAEditar, abrirModalEditar, cerrarModalEditar, // Para manejar el modal de formulario de edición
            extraerId
            }}> 
            {children}
        </ContextoGlobal.Provider>
    );
}
export default ContextoGlobalProvider;