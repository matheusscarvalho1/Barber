import styles from "./Homepage.module.css";

import Navbar from "../Navbar/Navbar";
import BtnTop from "../BtnTop/BtnTop";

const Homepage = () => {
  return (
    <>
      <div className={styles.home} id="home">
        <Navbar />
        <img
          src="/images/logo.png"
          width={134}
          height={130}
          alt="Barber Shop"
          className={styles.logoM}
        />
        <div className={styles.banner}>
          <span className={styles.slogan1}>Profissionalismo e Excelência</span>
          <h1>Barber Shop</h1>
          <span className={styles.slogan2}>
            O melhor lugar para cuidar do seu estilo.
          </span>
          <img
            src="/images/much-img.png"
            width={27}
            height={14}
            alt="Descrição da imagem"
          />
        </div>
        <BtnTop id="home"></BtnTop>
      </div>
    </>
  );
};

export default Homepage;
