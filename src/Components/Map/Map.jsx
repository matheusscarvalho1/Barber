import styles from "./Map.module.css";

import IFrame from "../Iframe/Iframe";
import Container from "../Templates/TemplateContainerPrimary/TemplateContainerPrimary";
import Content from "../Templates/TemplateContent/TemplateContent";
import TemplateTitle from "../Templates/TemplateTitles/TemplateTitle";

const Map = () => {
  return (
    <>
      <Container>
        <Content>
          <TemplateTitle
            title="Localização"
            img="/images/heading-ic-white.png"
            width={145}
            height={14}
            alt="Localização"
          />
          <section id="location" className={styles.location}>
            <div className={styles.container}>
              <div className={styles.head}>
                <div className={styles.info}>
                  <div className={styles.icon}>
                    <img
                      src="/images/map-img1.png"
                      width={20}
                      height={20}
                      className={styles.iconImg}
                      alt="Localização"
                    />
                  </div>
                  <div className={styles.text}>
                    <span>Localização</span>
                    <span>Rua Matrix, 152</span>
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.icon}>
                    <img
                      src="/images/map-img2.png"
                      width={18}
                      height={20}
                      className={styles.iconImg}
                      alt="Telefone"
                    />
                  </div>
                  <div className={styles.text}>
                    <span>Telefone</span>
                    <span>(65) 99999-9999</span>
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.icon}>
                    <img
                      src="/images/map-img3.png"
                      width={20}
                      height={18}
                      className={styles.iconImg}
                      alt="Email"
                    />
                  </div>
                  <div className={styles.text}>
                    <span>E-mail</span>
                    <span>cantato@barbershop.com</span>
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.icon}>
                    <img
                      src="/images/map-img4.png"
                      width={20}
                      height={20}
                      className={styles.iconImg}
                      alt="Horário"
                    />
                  </div>
                  <div className={styles.text}>
                    <span>Horário</span>
                    <span>Seg. à Sex: 9AM às 17PM</span>
                  </div>
                </div>
              </div>
              <div>
                <IFrame />
              </div>
            </div>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Map;
