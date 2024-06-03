import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteiner}>
        <div className={styles.conteinerItem}>
          <Link to="/">
            <img
            src="/images/logo_pet_dev.png"
            alt="O logo do PetDev"
            data-testid="navbar-item-logo"
            className={styles.logo}
            />           


            </Link>
        </div>
        <div className={styles.conteinerItem}>
          <span className={`${styles.contact} ${styles.text}`}>
            Contato
            <br />
            31 2199-3515
            <br />
            contato@petdev.com
          </span>
        </div>
        <ul className={styles.conteinerItem}>
          <li className={styles.listItem}>
            <Link to="/Animais">Animais</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/Quiz">Quiz</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/Sugestoes">Sugestões</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/Depoimentos">Depoimentos</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
