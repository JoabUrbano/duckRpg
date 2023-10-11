import {Link} from "react-router-dom"

import styles from './NavBar.module.css';

function NavBar() {
    return(
        <div className={styles.navbar}>
            <ui>
                <li><Link to="/">Home</Link></li>
                <li>Buscar Magias</li>
                <li>Sistema de XP</li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ui>
        </div>
    )
}

export default NavBar;
