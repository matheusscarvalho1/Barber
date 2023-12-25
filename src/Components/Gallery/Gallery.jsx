import styles from "./Gallery.module.css";
import Photo from "../Photos/Photo";

import Container from "../Templates/TemplateContainerSecondary/TemplateContainerSecondary";
import Content from "../Templates/TemplateContent/TemplateContent";
import TemplateTitle from "../Templates/TemplateTitles/TemplateTitle";

const Gallery = () => {
  return (
    <>
      <Container>
        <Content>
          <section id="gallery" className={styles.gallery}>
            <div className={styles.container}>
              <TemplateTitle
                title="Galeria de Fotos"
                img="/images/heading-ic.png"
                width={145}
                height={14}
                alt="Galeria de Fotos"
              />

              <div className={styles.galleryWrapper}>
                <div className={styles.mobileFoto}>
                  <Photo image={"gallery-img1.png"} width={277} height={179} />
                </div>
                <Photo image={"gallery-img2.png"} width={277} height={357} />
                <Photo image={"gallery-img3.png"} width={277} height={179} />
                <div className={styles.mobileFoto}>
                  <Photo image={"gallery-img5.png"} width={277} height={238} />
                </div>
                <div className={styles.mobileFoto2}>
                  <Photo image={"gallery-img6.png"} width={277} height={162} />
                </div>

                <div className={styles.mobileFoto}>
                  <Photo image={"gallery-img7.png"} width={277} height={318} />
                </div>
              </div>
            </div>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Gallery;
