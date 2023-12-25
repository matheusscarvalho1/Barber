import styles from "./CardServices.module.css";

const Card = ({ image, width, height, detail, title, text }) => {
  return (
    <>
      <div className={styles.box}>
        <img
          src={`/images/${image}`}
          alt={`${image}`}
          width={width}
          height={height}
        />
        <h4 className={styles.title}>{title}</h4>
        <img
          src={`/images/${detail}`}
          alt={`Separador`}
          width={33}
          height={7}
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default Card;
