import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.rodape}>
      <div>
        <img
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihax74OlEISIToScS37Gu5GguFyra_MX6LTvmKgqA74E463ZjLeOgHV0jJuNTW0NWfAOW1r-3kqPDSwPW8QsGQqMn9nLBKQtumE=w1366-h599"
          alt="O logo do PetDev"
          data-testid="navbar-item-logo"
          className={styles.logo}
        />
      </div>
      <h3 className={styles.contato}>
        Contato
        <br />
        31 2199-3515
        <br />
        contato@petdev.com
      </h3>

      <h3 className={styles.informacoes}>Informações</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/Animais">Animais</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Quiz">Quiz</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Sobre">Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Sugestões">Sugestões</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Depoimentos">Depoimentos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
