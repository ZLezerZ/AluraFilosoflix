import Contenedor from "../../Components/Contenedor/Contenedor";
import styles from "./NoFunciona.module.css";
const NoFunciona = () => {
  return (
    <>
      <Contenedor>
        <section className={styles.contenedorError}>
          <h2 className={styles.tituloError}>¡Ups! Algo salió mal</h2>
          <span className={styles.codigoError}>
            <p >ERROR</p>
            <p className={styles.numero}>404</p>
          </span>
          <p className={styles.textoError}>
            Lo sentimos, pero la página que buscas no está disponible.
          </p>
        </section>
      </Contenedor>
    </>
  );
};
export default NoFunciona;
