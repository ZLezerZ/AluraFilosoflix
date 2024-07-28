import { useContext } from "react";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import FormularioModal from "../FormularioModal/FormularioModal";

const Modal = ({video}) => {
    const { cerrarModalEditar } = useContext(ContextoGlobal);
    return (
        <>
            <dialog open={!!video}>
                <FormularioModal video={video} titulo={"EDITAR VIDEO"} cerrarModalEditar={cerrarModalEditar}></FormularioModal>
                <form method="dialog">
                </form>
            </dialog>
        </>
    )
}
export default Modal;