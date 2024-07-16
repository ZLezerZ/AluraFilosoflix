import styles from './Titulo.module.css';

const Titulo = ({titulo, colorPrimario}) => {
    return (
        <span className={styles.contenedor}>
            <h2 className={styles.titulo} style={{backgroundColor: colorPrimario}}>{titulo}</h2>
        </span>
    );
}

export default Titulo;