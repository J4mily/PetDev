import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.animal}>
        <div>
          <Link to="/">

                <img
                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihax74OlEISIToScS37Gu5GguFyra_MX6LTvmKgqA74E463ZjLeOgHV0jJuNTW0NWfAOW1r-3kqPDSwPW8QsGQqMn9nLBKQtumE=w1366-h599"
                alt="O logo do PetDev"
                data-testid="navbar-item-logo"
                className={styles.logo}
              />           
           

          </Link>
        </div>

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
            <Link to="/Sugestoes">Sugestões</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
