import styles from "./NuevoVideo.module.css";
import Contenedor from "../../Components/Contenedor/Contenedor";
import FormularioCrear from "../../Components/FormularioCrear/FormularioCrear";

const NuevoVideo = () => {

  return (
      <Contenedor>
          <div className={styles.contenedor}>
        <FormularioCrear
          titulo={"NUEVO VIDEO"}
          descripcion={
            "COMPLETE EL FORMULARIO PARA AÑADIR UNA NUEVA TARJETA CON SU VIDEO"
          }
        ></FormularioCrear>
    </div>
      </Contenedor>
  );
};
export default NuevoVideo;
