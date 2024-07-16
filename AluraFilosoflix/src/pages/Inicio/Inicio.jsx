import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { ContextoGlobal } from "../../Components/ContextoGlobal/ContextoGlobal";
import Categoria from "../../Components/Categoria/Categoria";
import Contenedor from './../../Components/Contenedor/Contenedor';
import Modal from "../../Components/ModalFormulario/ModalFormulario";

const Inicio = () => {

  const { categorias, videoAEditar } = useContext(ContextoGlobal);

  return (
    <div>
      <Banner />
      <Contenedor>
      {categorias.map((categoria) => (
        <Categoria key={categoria.titulo} categoria={categoria} />
      ))}
      </Contenedor>
      <Modal video={videoAEditar}></Modal>
    </div>
  )
}

export default Inicio;