import { useContext } from "react";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ textoCampo, value, nombre, evento }) => {

const {categorias} = useContext(ContextoGlobal);
const listaOp = `listaOpciones-${nombre}`;

  return (
    <div className={styles.contenedor}>
      <label className={styles.label} htmlFor={listaOp} >{textoCampo}</label>

      <select 
      required
      id={listaOp}
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
