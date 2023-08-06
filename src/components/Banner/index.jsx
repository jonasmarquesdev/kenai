import stars from "../../assets/star.svg";
import clockIcon from "../../assets/timeCircle.png";

import styles from "./Banner.module.css";

export default function Banner() {
    return(
        <div className={styles.container}>
            <span className={styles.container__categoria}>
                <p className={styles.categoria}>
                    Ação
                </p>
            </span>
            <span className={styles.container__statusInfo}>
                <img src={stars} alt="" />
                <img src={clockIcon} alt="" className={styles.clock} />
                <p>1h 57m</p>
            </span>
            <h1 className={styles.container__nome}>Batman</h1>
            <p className={styles.container__descricao}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. 
            </p>
            <button className={styles.container__botao}>
                Assistir agora
            </button>
        </div>
    );
}