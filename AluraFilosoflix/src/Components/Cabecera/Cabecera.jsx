import styles from './Cabecera.module.css';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const Cabecera = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.contenedorBotones}>
                <Link to={"./"}>
                <FaHome className={styles.botonCasa} /> <span className={styles.botonGrande}><Boton  texto={"HOME"} clase={"botonAzul"}></Boton></span>
                </Link>
                <Link to={"/nuevoVideo"}>
                <MdOutlineFileUpload className={styles.botonSubir}/> <span className={styles.botonGrande}><Boton className={styles.botonGrande} texto={"NUEVO VIDEO"} clase={"botonBlanco"}></Boton></span>
                </Link>

            </nav>
        </header>
    )
}
export default Cabecera; 