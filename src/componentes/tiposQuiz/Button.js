import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to="/Quiz/QuizBetta">
      <button className={styles.button}>{props.texto}</button>
    </Link>
  );
};

export default Button;
