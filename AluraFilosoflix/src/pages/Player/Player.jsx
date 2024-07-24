import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextoGlobal } from "../../Components/ContextoGlobal/ContextoGlobal";
import Contenedor from "../../Components/Contenedor/Contenedor";
import styles from "./Player.module.css";

const Player = () => {
  const { id } = useParams();
  const { videos,extraerId } = useContext(ContextoGlobal);
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);

  const video = videos.find((video) => video.id == id);

  useEffect(() => {
    if (!video && videos.length === 0) {
      setCargando(true);
    } else if (!video) {
      navigate("/error");
    } else {
      setCargando(false);
    }
  }, [id, video, videos, navigate]);

  const videoId = video ? extraerId(video.url) : null;

  return cargando ? (
    <div className={styles.cargando}>
      <h2>Cargando...</h2>
    </div>
  ) : (
    video && (
      <>
        <Contenedor>
          <section className={styles.contenedor}>
            <div className={styles.contenedorInfo}>
              <h2>{video.titulo}</h2>
              <h3>
                <b>Categoría:</b> {video.categoria}
              </h3>
              <h3>
                <b>Descripción:</b> {video.descripcion}
              </h3>
            </div>

            <div className={styles.contenedorVideo}>
              <iframe
                width="500"
                height="300"
                src={`https://youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </Contenedor>
      </>
    )
  );
};

export default Player;