import { Link } from 'react-router-dom';
import styles from './Boton.module.css';

const Boton = ({texto, clase, tipo }) => {
    return (
            <button type={tipo} className={`${styles.boton} ${styles[clase]}`}>{texto}</button>
    );
}

export default Boton;