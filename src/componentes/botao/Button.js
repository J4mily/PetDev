import styles from "./Button.module.css";

const Button = (props) => {
    return(<button className={styles.button}>
        {props.texto}
        </button>
        
    )
}

export default Button;

