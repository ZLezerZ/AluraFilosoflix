import { useContext } from "react";
import { ContextoGlobal } from "../ContextoGlobal/ContextoGlobal";
import Formulario from "../Formulario/Formulario";

const Modal = ({video}) => {
    // const { videos } = useContext(ContextoGlobal);
    return (
        <>
            <dialog open={!!video}>
                <Formulario video={video}></Formulario>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </dialog>
        </>
    )
}
export default Modal;

{/* <div className={isOpen ? styles.modal : styles.modalHidden}>
<div className={styles.modalContent}>
    <button className={styles.closeButton} onClick={onClose}>X</button>
    {children}
</div>
</div> */}