import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}>
            DuckRPG by <a href="https://github.com/JoabUrbano" target="_black"><span>Joab</span></a>&copy; 2023
        </div>
    )
}

export default Footer;
