import styles from "./style.module.css";

const UpInput = ({
  className,
  type = "text",
  value,
  name,
  placeholder = "",
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      className={[styles.input, className].join(" ")}
      placeholder={placeholder}
      value={value}
      onChange={(e) => props.onChange(e.target.value)}
      {...props}
    />
  );
};

export default UpInput;
