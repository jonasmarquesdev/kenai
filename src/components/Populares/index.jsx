import Card from "../Card";
import imagens from "../../utils/imagens.js";

import styles from "./Populares.module.css";

export default function Populares() {
    return(
        <div className={styles.container__populares}>
            <div className={styles.populares__containerTitulo}>
                <h2>Populares</h2>
            </div>
            <div className={styles.populares__lista}>
                {imagens.map((image, index) => (
                    <Card key={index} nome={image.name} imagem={image.url} />
                ))}
            </div>
        </div>
    );
}