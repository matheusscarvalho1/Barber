import styles from "./Navbar.module.css";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <section className={styles.navbar}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <ScrollLink to="home" smooth={true} duration={100} offset={-50}>
                  home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={100}>
                  sobre
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={100}>
                  serviços
                </ScrollLink>
              </li>
              <li>
                <img
                  src="/images/logo.png"
                  width={150}
                  height={150}
                  alt="Barber Shop"
                  className={styles.logo}
                />
              </li>
              <li>
                <ScrollLink to="appointment" smooth={true} duration={100}>
                  agendamento
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="gallery" smooth={true} duration={100}>
                  galeria
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="location" smooth={true} duration={100}>
                  localização
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </header>
        <nav>
          <ul className={styles.menuM}>
            <ul className={styles.menuH}>
              <a href="#">☰</a>
              <ul className={styles.submenuM}>
                <li>
                  <ScrollLink to="home" smooth={true} duration={100}>
                    home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" smooth={true} duration={100}>
                    sobre
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="services" smooth={true} duration={100}>
                    serviços
                  </ScrollLink>
                </li>

                <li>
                  <ScrollLink to="appointment" smooth={true} duration={100}>
                    agendamento
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="gallery" smooth={true} duration={100}>
                    galeria
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="location" smooth={true} duration={100}>
                    localização
                  </ScrollLink>
                </li>
              </ul>
            </ul>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
