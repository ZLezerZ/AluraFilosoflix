import styles from './Cabecera.module.css';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';

const Cabecera = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.contenedorBotones}>
                <Link to={"./"}>
                    <Boton texto={"HOME"} clase={"botonAzul"}></Boton>
                </Link>
                <Link to={"/nuevoVideo"}>
                    <Boton texto={"NUEVO VIDEO"} clase={"botonBlanco"}></Boton>
                </Link>

            </nav>
        </header>
    )
}
export default Cabecera; 