import styles from "./Button.module.css";

const Button = () => {
    return(
        
        <button className={styles.botao_saibamais}>
            <text className={styles.texto_botao}>
                SAIBA MAIS
            </text>
            
        </button>
    )
}

export default Button;


