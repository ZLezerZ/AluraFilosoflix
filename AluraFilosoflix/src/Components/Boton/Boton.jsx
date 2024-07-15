import { Link } from 'react-router-dom';
import styles from './Boton.module.css';

const Boton = ({ url, texto, clase }) => {
    return (
        <Link to={url}>
            <button className={`${styles.boton} ${styles[clase]}`}>{texto}</button>
        </Link>
    );
}

export default Boton;