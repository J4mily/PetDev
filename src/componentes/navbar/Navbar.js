import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <div className={styles.animal}>
        <div>
          <Link to="/">
            <div>
              <img src= "./imagens/logo.png"
                alt="logo"
                data-testid="navbar-item-logo"
                className={styles.logo}
              />
            </div>
          </Link>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/animais">Animais</Link>
            </li>
            <li className={styles.item}>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li className={styles.item}>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className={styles.item}>
              <Link to="/sugestao">Sugestões</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )

}

export default Navbar;