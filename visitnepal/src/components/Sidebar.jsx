import Logo from "./Logo"
import AppNav from "./AppNav"
import styles from "./Sidebar.module.css"

function Sidebar() {
    return (
        <div className={styles.css}>
            <Logo/>
            <AppNav/>

            <p>List of Cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by Ankit Pokhrel</p>
            </footer>
        </div>
    )
}

export default Sidebar
