import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const LinkButton = ({ href, children, ...props }) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

const BaseButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

const UpButton = ({ full = false, children, className, ...props }) => {
  const Comp = props.href ? LinkButton : BaseButton;

  return (
    <Comp
      className={[styles.button, full && styles.fullWidth, className].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default UpButton;
