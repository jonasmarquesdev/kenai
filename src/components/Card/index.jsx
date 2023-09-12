import rating from "../../assets/rating.svg";

import styles from "./Card.module.css";

export default function Card({ nome, imagem }) {
  return (
    <div className={styles.container__card}>
      <div className={styles.container__gradiente_overlay}></div>
      <img className={styles.container__imagem} src={imagem} alt="" />
      <div className={styles.container__box}>
        <p className={styles.container__categoria}>Categoria</p>
        <img className={styles.container__rating} src={rating} alt="" />
        <h3 className={styles.container__card_titulo}>{nome}</h3>
      </div>
    </div>
  );
}
