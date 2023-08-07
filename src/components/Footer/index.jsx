import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";

import styles from "./Footer.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <h1 className={styles.footer__logo}>Kenai</h1>
            <ul>
                <li>
                    <img src={instagram} alt="" />
                </li>
                <li>
                    <img src={twitter} alt="" />
                </li>
                <li>
                    <img src={facebook} alt="" />
                </li>
            </ul>
        </footer>
    );
}