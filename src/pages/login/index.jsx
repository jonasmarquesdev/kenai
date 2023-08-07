import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";

import circle1 from "../../assets/circle1.svg";
import circle2 from "../../assets/circle2.svg";
import circle3 from "../../assets/circle3.svg";

import styles from "./Login.module.css";

export default function Login() {
    const [currentTime, setCurrentTime] = useState(new Date());

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <Logo cor="laranja" />
                <span>{formattedTime} PM</span>
            </nav>
            <div className={styles.container__box}>
                <h1 className={styles.container__box_titulo}>
                    Bem-vindo de volta ao Kenai
                </h1>
                <h2 className={styles.container__box_subtitulo}>Quem está usando?</h2>
            </div>
            <div className={styles.container__box_usuarios}>
                <ul>
                    <li onClick={handleClick}>
                        <img className={styles.avatar} src={circle1} alt="" />
                        <p className={styles.username}>Usuário</p>
                    </li>
                    <li onClick={handleClick}>
                        <img className={styles.avatar} src={circle2} alt="" />
                        <p className={styles.username}>Jonas Marques</p>
                    </li>
                    <li onClick={handleClick}>
                        <img className={styles.avatar} src={circle3} alt="" />
                        <p className={styles.username}>Usuário</p>
                    </li>
                </ul>
            </div>
            <div className={styles.container__botao}>
                <button className={styles.botao}>Adicionar perfil</button>
            </div>
        </div>
    );
}
