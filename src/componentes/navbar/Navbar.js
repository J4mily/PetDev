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
                alt="O logo do PetDev"
                data-testid="navbar-item-logo"
                className={styles.logo}
              />
            </div>
          </Link>
        </div>
        
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
      
    </nav>

  )

}

export default Navbar;