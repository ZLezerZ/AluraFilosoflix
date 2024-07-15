import styles from './Contenedor.module.css';

const Contenedor = ({children}) => {
    return (
        <section className={styles.contenedor}>
            {children}
        </section>
    )
}

export default Contenedor;