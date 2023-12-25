import styles from "./TemplateContainerPrimary.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div className={styles.TemplatePrimary}>{children}</div>
    </>
  );
};

export default Container;
