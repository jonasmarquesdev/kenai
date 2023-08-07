import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Populares from "../../components/Populares";
import Footer from "../../components/Footer";

import styles from "./Home.module.css";

export default function Home() {
    return(
        <div className={styles.background}>
            <Nav />
            <Banner />
            <Populares />
            <Footer />
        </div>
    );
}