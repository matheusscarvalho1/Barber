import styles from "./TemplateTitle.module.css";

const TemplateTitle = ({ title, img, width, height, alt }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <img src={img} width={width} height={height} alt={alt} />
    </div>
  );
};

export default TemplateTitle;
