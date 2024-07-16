import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext();

const ContextoGlobalProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([
        {
            titulo: "Introducción a la Filosofía",
            color: "#ffba05"
        },
        {
            titulo: "Filosofía Política",
            color: "#ec6d60"
        },
        {
            titulo: "Estética",
            color: "#6bd1ff"
        },
        {
            titulo: "Epistemología",
            color: "#00c86f"
        }
    ]);
    const [videoAEditar, setVideoAEditar] = useState(null);

    // useEffect(() => {
    //     if (videos.length > 0) {
    //         setVideoAEditar(videos[0]); // Aquí puedes establecer cualquier video por defecto
    //     }
    // }, [videos]);

    const abrirModalEditar = (video) => {
        setVideoAEditar(video);
    };

    const eliminarVideo = async (id) => {
        try {
            const respuesta = await fetch(`https://my-json-server.typicode.com/ZLezerZ/AluraFilosoflix/videos/${id}`, {
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

    useEffect(() => {
        const getData = async () => {
            try {
                const respuesta = await fetch('https://my-json-server.typicode.com/ZLezerZ/AluraFilosoflix/db');
                const data = await respuesta.json();
                setVideos(data.videos);
            } catch (error) {
                console.error('Error al traer los videos:', error);
            }
        };
        getData();
    }, []);

    return (
        <ContextoGlobal.Provider value={{ videos, setVideos, categorias, setCategorias, eliminarVideo, videoAEditar, setVideoAEditar, abrirModalEditar }}>
            {children}
        </ContextoGlobal.Provider>
    );
}
export default ContextoGlobalProvider;