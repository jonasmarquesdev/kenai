import Card from "../Card";
import imagens from "../../utils/imagens.js";

import styles from "./Populares.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Populares() {
    const carousel = useRef();
    const [CurrentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [calWidth, setCalWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setCurrentWidth(window.innerWidth);
            const newCalWidth = carousel.current?.scrollWidth - carousel.current?.offsetWidth;
            setCalWidth(newCalWidth);
        };
        
        window.addEventListener('resize', handleResize);
        const initialCalWidth = carousel.current?.scrollWidth - carousel.current?.offsetWidth;
        setCalWidth(initialCalWidth);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    return(
        <motion.div ref={carousel} className={styles.container__populares}>
            <div className={styles.populares__containerTitulo}>
                <h2>Populares</h2>
            </div>
            {CurrentWidth > 991 ? (
                <div className={styles.populares__lista}>
                    {imagens.map((image, index) => (
                        <Card key={index} nome={image.name} imagem={image.url} />
                    ))}
                </div>
            ) : (
                <motion.div
                    className={styles.slider_container}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        className={styles.populares__lista}
                        drag="x"
                        dragConstraints={{ right: 0, left: -calWidth}}
                        
                    >
                        {imagens.map((image, index) => (
                            <Card key={index} nome={image.name} imagem={image.url} />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}