import { useNavigate } from "react-router-dom";

import searchLogo from "../../assets/search.svg";
import bellLogo from "../../assets/bell.svg";
import userLogo from "../../assets/user.svg";

import styles from "./Nav.module.css";

import Logo from "../Logo";

export default function Nav() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return(
        <nav className={styles.navBar}>
            <Logo cor="laranja" />
            <ul>
                <li>
                    <img src={searchLogo} alt="" />
                </li>
                <li onClick={handleClick}>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Minha lista</a>
                </li>
                <li>
                    <img src={bellLogo} alt="" />
                </li>
                <li onClick={handleClick}>
                    <img src={userLogo} alt="" />
                </li>
            </ul>
        </nav>
    );
}