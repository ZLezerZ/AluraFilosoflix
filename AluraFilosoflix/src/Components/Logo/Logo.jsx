import logo from '../../assets/img/logo-AluraFilosoflix.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <picture className={styles.picture}>
            <img src={logo} alt="Logo AluraFilosoflix" />
        </picture>
    );
}

export default Logo;