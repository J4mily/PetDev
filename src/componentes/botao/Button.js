import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to="/Home/Animais">
      <button className={styles.button}>{props.texto}</button>
    </Link>
  );
};

export default Button;
