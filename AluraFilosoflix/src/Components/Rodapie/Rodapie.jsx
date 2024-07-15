import Logo from '../Logo/Logo';
import styles from './Rodapie.module.css';

const Rodapie = () => {
    return (
        <footer className={styles.footer}>
            <Logo/>
            <p>Desarrollada por Leonardo Esteban Zermoglio </p>
            <p>CopyRight - 2024 </p>
        </footer>
    );
}
export default Rodapie;