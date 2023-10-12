import {Link} from "react-router-dom"

import styles from './NavBar.module.css';
import imageHome from '../../img/kawaii_duck_png_by_milosii_df87clj-pre.png'

function NavBar() {
    return(
        <div className={styles.navbar}>
            <Link to="/"><img src={imageHome} alt="Pokedex" /></Link>
            <ui>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buscarmagias">Buscar Magias</Link></li>
                <li><Link to="/sistemaxp">Sistema de XP</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ui>
        </div>
    )
}

export default NavBar;
