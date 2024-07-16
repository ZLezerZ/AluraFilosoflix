import { useContext } from "react";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ textoCampo, value, nombre, evento }) => {

const {categorias} = useContext(ContextoGlobal);

  return (
    <div className={styles.contenedor}>
      <label className={styles.label}>{textoCampo}</label>

      <select 
      required
      name={nombre}
      value={value} 
      onChange={evento}
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Categoría
        </option>
        {categorias.map((categoria, index) => {
          return (
            <option key={index} value={categoria.titulo}>
              {categoria.titulo}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
