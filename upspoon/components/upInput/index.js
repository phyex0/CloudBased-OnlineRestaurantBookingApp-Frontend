import styles from "./style.module.css";

const UpInput = ({ className, value, placeholder = "", ...props }) => {
  return (
    <input
      type="text"
      className={[styles.input, className].join(" ")}
      placeholder={placeholder}
      value={value}
      onChange={(e) => props.onChange(e.target.value)}
      {...props}
    />
  );
};

export default UpInput;
