import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import Animais from "../../pages/animais/Animais";


const Button = (props) => {
    return(
        <button className={styles.button}>
            
        {props.texto}
        <a href="./Animais"></a>
        </button>
        
        
    )
}

export default Button;


