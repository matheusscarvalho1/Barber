import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        © 2023 Barber Shop - Todos os direitos reservados
        <p>Developed by Matheus Carvalho</p>
      </footer>
    </>
  );
};

export default Footer;
