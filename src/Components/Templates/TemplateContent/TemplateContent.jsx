import styles from "./TemplateContent.module.css";

const Content = ({ children }) => {
  return (
    <>
      <div className={styles.Content}>{children}</div>
    </>
  );
};

export default Content;
