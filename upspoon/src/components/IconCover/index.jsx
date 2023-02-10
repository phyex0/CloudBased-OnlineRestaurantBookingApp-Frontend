import styles from "./style.module.css";

const IconCover = ({ children, className, ...props }) => {
  return (
    <div className={[styles.container, className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default IconCover;
