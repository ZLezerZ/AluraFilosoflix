import { Link } from 'react-router-dom';
import styles from './Boton.module.css';

const Boton = ({texto, clase, tipo, onClick }) => {
    return (
            <button type={tipo} className={`${styles.boton} ${styles[clase]}`} onClick={onClick}>{texto}</button>
    );
}

export default Boton;