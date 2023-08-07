import styles from "./Logo.module.css";

const Logo = ({ cor }) => {
	if (cor === "laranja") {
		return <h1 className={styles.logoLaranja}>Kenai</h1>;
	} else {
		return <h1 className={styles.logoBranca}>Kenai</h1>;
	}
}

export default Logo;