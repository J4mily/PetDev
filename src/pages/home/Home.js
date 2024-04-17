import styles from './Home.module.css';

export const  Home = () => {
    return(
    <div>className={styles.container}
        
        <div className={styles.titulo_home}>
            <h1>Qual é a sua maior curiosidade<br />sobre o seu animal favorito?</h1>
            <p className={styles.texto_home}>
                Explore exatamente o que você deseja saber!<br />Clique no botão "Saiba Mais" para descobrir<br />
            mais detalhes sobre a vida do seu pet.</p>
        </div>

    </div>
    )
}

export default Home;