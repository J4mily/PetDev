import styles from "./Depoimentos.module.css";
import logoPetlove from "../../assets/petlove.png";
import card1 from "../../assets/card1.png";

function Depoimentos() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.container_titulo}>
          <h1 className={styles.titulo}>Nossos</h1>
          <h1 className={styles.titulo}>Clientes</h1>
        </div>

        <div className={styles.card}>
          <div className={styles.card_conteudo}>
            <img src={card1} alt="depoimentos" />
          </div>
        </div>

        <div className={styles.clientes_parceiros}>
          <ClientesParceiros cliente="PetLove" logo={logoPetlove} />
          <ClientesParceiros cliente="Cobasi" logo={logoPetlove} />
          <ClientesParceiros cliente="PetShop" logo={logoPetlove} />
          <ClientesParceiros cliente="Petz" logo={logoPetlove} />
        </div>
      </div>
    </div>
  );
}

function ClientesParceiros({ cliente, logo }) {
  return (
    <div className={styles.container_cliente}>
      <img className={styles.image_logo} src={logo} alt="Logo do cliente" />
      <p className={styles.cliente_name}>{cliente}</p>
    </div>
  );
}

export { Depoimentos };
