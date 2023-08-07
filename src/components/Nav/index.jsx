import searchLogo from "../../assets/search.svg";
import bellLogo from "../../assets/bell.svg";
import userLogo from "../../assets/user.svg";
import styles from "./Nav.module.css"

export default function Nav() {
    return(
        <nav className={styles.navBar}>
            <h1 className={styles.logo}>Kenai</h1>
            <ul>
                <li>
                    <img src={searchLogo} alt="" />
                </li>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Minha lista</a>
                </li>
                <li>
                    <img src={bellLogo} alt="" />
                </li>
                <li>
                    <img src={userLogo} alt="" />
                </li>
            </ul>
        </nav>
    );
}