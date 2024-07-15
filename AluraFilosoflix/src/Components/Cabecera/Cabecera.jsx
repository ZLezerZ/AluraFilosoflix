import styles from './Cabecera.module.css';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';

const Cabecera = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.contenedorBotones}>
                <Boton url="./" texto={"HOME"} clase={"botonAzul"}></Boton>
                <Boton url="/nuevoVideo" texto={"NUEVO VIDEO"} clase={"botonBlanco"}></Boton>
            </nav>
        </header>
    )
}
export default Cabecera; 