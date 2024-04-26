import Button from "../../componentes/botao/Button";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    
      <section className= {styles.section_home}>
         <div className={styles.titulo_home}>
            <h1>
              Qual é a sua maior curiosidade
              <br />
              sobre o seu animal favorito?
            </h1>
            <p className={styles.texto_home}>
              Explore exatamente o que você deseja saber!
              <br />
              Clique no botão "Saiba Mais" para descobrir
              <br />
              mais detalhes sobre a vida do seu pet.
            </p>
          </div>
         <Button />
        </section>
     
    
  );
};

export default Home;
