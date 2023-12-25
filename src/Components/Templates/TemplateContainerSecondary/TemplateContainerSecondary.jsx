import styles from "./TemplateContainerSecondary.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div className={styles.TemplateSecondary}>{children}</div>
    </>
  );
};

export default Container;
