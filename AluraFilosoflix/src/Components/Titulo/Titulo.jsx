import styles from './Titulo.module.css';

const Titulo = ({titulo, color}) => {
    return (
        <span className={styles.contenedor}>
            <h2 className={styles.titulo} style={{backgroundColor: color}}>{titulo}</h2>
        </span>
    );
}

export default Titulo;