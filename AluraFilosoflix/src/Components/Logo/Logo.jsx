import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-AluraFilosoflix.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="/" className={styles.logo}>
            <picture className={styles.picture}>
                <img src={logo} alt="Logo AluraFilosoflix" />
            </picture>
        </Link>
    );
}

export default Logo;