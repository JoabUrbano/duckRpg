import Styles from './NavBar.module.css';

function NavBar() {
    return(
        <div className={Styles.navbar}>
            <ui>
                <li>Home</li>
                <li>Buscar Magias</li>
                <li>Sistema de XP</li>
                <li>Sobre</li>
            </ui>
        </div>
    )
}

export default NavBar;
