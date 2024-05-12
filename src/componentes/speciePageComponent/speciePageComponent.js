import React from "react";
import styles from "./speciePage.module.css";

function SpeciePageComponent(){
    return(
      <div className={styles.mainConteiner}>
        <div className={styles.contentConteiner}>
          <section className={styles.introduction}>
            <div className={styles.content}>
              <div className={styles.contentItem}>

                <img className={styles.animalImage}  alt="Imagem Gato Siamês" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ3xnFIQE21Ffy4MeKpX37UOp0n-u61U-Xb9dCcLNOmcruhvJ0YDSQqetk1GDTLLMn6GUKcFBXmLHr94FFLtroQ82QYskMZdXk=w1872-h923"></img>

              </div>
              <div className={styles.contentItem}>
                <h1 className={styles.firstTittle}>Siamês</h1>
                <p className={styles.text}>O gato Siamês, conhecido por suas características únicas e
              encantadoras, é uma das raças mais famosas do mundo felino. Existem
              diferentes tipos de siameses, cada um com suas particularidades.
              Reconhecido por sua afetuosidade e elegância distinta, é fácil
              identificar um Siamês pelo seu porte médio e orelhas bem posicionadas.
              Valorizando a companhia de seus tutores, esses felinos são leais e
              proporcionam momentos de diversão, tornando-se companheiros
              inseparáveis para suas famílias humanas</p>
              </div>
            </div>
          </section>

          <section className={styles.blackRetangle}>
          <h2 className={styles.tittle}>Informações Gerais</h2>
          <p className={styles.text}>O gato Siamês é um animal ativo e brincalhão, raramente ficando parado. Ele se diverte por horas com seus brinquedos favoritos e é um excelente saltador, pronto para buscar objetos durante as brincadeiras. Sua personalidade inclui um porte elegante e altivo, com pernas longas, patinhas delicadas e uma cauda em forma de chicote, criando uma aparência distinta.</p>
          </section>
          
          <section className={styles.youNeedToKnow}>
            <h2 className={styles.tittle}>O que deve saber</h2>
            <div className={styles.content}>
              <div className={styles.contentItem}>
                <img className={styles.animalImage} src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZQqiHlNIN-LJdsG9P56wxVkD_TeqKjqjk0xwR-pdmzYc5HXEBT20R55D5GFshznGVRqp2oUtpnO-xpWYbJGn_4hwOT2S8IBA=w1872-h923" alt="Imagem gato siamês"></img>
              </div>
              <div className={styles.contentItem}>
                <div className={styles.characteristics}>
                  <img src="https://lh3.google.com/u/0/d/1otRHLtid0LaxJqQkeF4A3ZWP4IxVJDvB=w1872-h923-iv1" alt="Icon tempo estimado de vida"></img>
                  <span className={styles.text}>Em média de 15 a 20 anos.</span>
                </div>

                <div className={styles.characteristics}>
                  <img src="https://lh3.google.com/u/0/d/1Rn7Kn1aEZREgOoD47JKxGJguUt_e2gjX=w1872-h923-iv1" alt="Icon valor"></img>
                  <span className={styles.text}>Varia de R$ 1.500 a R$ 4.000, dependendo do criador, linhagem e pedigree.</span>
                </div>
                
                <div className={styles.characteristics}>
                  <img src="https://lh3.google.com/u/0/d/1gqKe2DYCYFk-CjiYrA94j8OiixepDzgb=w1265-h923-iv1" alt="Icon personalidade"></img>
                  <span className={styles.text}>Inteligente e dócil.</span>
                </div>
                  
                <div className={styles.characteristics}>
                  <img src="https://lh3.google.com/u/0/d/1F4-jJ3sU_UFnSnjDTmrwl09h_TWmroFi=w1265-h923-iv1" alt="Icon adaptacao com os humanos"></img>
                  <span className={styles.text}>Se adapta facilmente a qualquer ambiente.</span>
                </div>
                <div className={styles.characteristics}>
                  <img src="https://lh3.google.com/u/0/d/1qE-Q-4PtERI7_isj4xmzmS3XSVAUU6ir=w1265-h923-iv1" alt="Icon características fisicas"></img>
                  <span className={styles.text}>Olhos azuis e focinho achatado, pelagem curta.</span>

                </div>
              </div>
            </div>
          </section>
          <section className={styles.blackRetangle}>
          <h2 className={styles.tittle}>Cuidados Necessários</h2>
          <p className={styles.text}>Para garantir uma convivência harmoniosa e duradoura com seu gato Siamês, é fundamental adotar alguns cuidados essenciais. Visitar regularmente o veterinário e estar atento a qualquer comportamento anormal são medidas importantes. 

  Devido a fatores genéticos, esse tipo de gato tem propensão a desenvolver doenças como problemas no fígado, brônquios e congênitos no coração, além de correr riscos durante saltos e corridas.

  A higiene é uma responsabilidade crucial dos tutores, incluindo a oferta de banhos regulares, apesar do mito de que gatos não gostam de água. Introduzir o hábito desde cedo pode facilitar a adaptação do gato à água. 

  Aproveite a fase de filhote para começar a habituá-lo ao banho e à limpeza de orelhas, olhos e patas. Além disso, é importante levar o gato regularmente ao veterinário para tratamentos estéticos que promovam seu bem-estar.</p>
          </section>
          <section className={styles.recommendedProducts}>
            <h2 className={styles.tittle}>Descubra produtos ideais para seu pet!</h2>
            <div className={styles.productsConteiner}>
              <div className={styles.product}>
                <img src="https://lh3.google.com/u/0/d/1RpGh2G0hOq2LoySK5aOsTTZ0eV6Ky3kB=w1265-h923-iv2" alt="Ração gato"></img>
                <p className={styles.text}>Ração Premier Ambientes Internos para Gatos Filhotes Sabor Frango</p>
              </div>
              <div className={styles.product}>
                <img src="https://lh3.google.com/u/0/d/1RpGh2G0hOq2LoySK5aOsTTZ0eV6Ky3kB=w1265-h923-iv2" alt="Ração gato"></img>
                <p className={styles.text}>Ração Premier Ambientes Internos para Gatos Filhotes Sabor Frango</p>
              </div>
              <div className={styles.product}>
                <img src="https://lh3.google.com/u/0/d/1RpGh2G0hOq2LoySK5aOsTTZ0eV6Ky3kB=w1265-h923-iv2" alt="Ração gato"></img>
                <p className={styles.text}>Ração Premier Ambientes Internos para Gatos Filhotes Sabor Frango</p>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.curiosities}>
          <h2 className={styles.tittle}>Curiosidades</h2>
          <div className={styles.curiositiesConteiner}>
            <div className={styles.curiosity}>
              <div className={styles.curiosityTittleBox}>
                <h3 className={styles.curiosityTittle}>Segurança</h3>
              </div>
              <p className={styles.curiosityText}>Bastante valorizados pelo rei de Sião (atual Tailândia), o gato Siamês era utilizado como vigia nos palácios. O imperador contava com o bichano posicionado em colunas ao lado do trono dele. Assim, quando alguma pessoa ameaçasse o monarca, o gato pularia em cima dela para imobilizá-lo.</p>
            </div>
            <div className={styles.curiosity}>
              <div className={styles.curiosityTittleBox}>
                <h3 className={styles.curiosityTittle}>Segurança</h3>
              </div>
              <p className={styles.curiosityText}>Bastante valorizados pelo rei de Sião (atual Tailândia), o gato Siamês era utilizado como vigia nos palácios. O imperador contava com o bichano posicionado em colunas ao lado do trono dele. Assim, quando alguma pessoa ameaçasse o monarca, o gato pularia em cima dela para imobilizá-lo.</p>
            </div>
            <div className={styles.curiosity}>
              <div className={styles.curiosityTittleBox}>
                <h3 className={styles.curiosityTittle}>Segurança</h3>
              </div>
              <p className={styles.curiosityText}>Bastante valorizados pelo rei de Sião (atual Tailândia), o gato Siamês era utilizado como vigia nos palácios. O imperador contava com o bichano posicionado em colunas ao lado do trono dele. Assim, quando alguma pessoa ameaçasse o monarca, o gato pularia em cima dela para imobilizá-lo.</p>
            </div>
            <div className={styles.curiosity}>
              <div className={styles.curiosityTittleBox}>
                <h3 className={styles.curiosityTittle}>Segurança</h3>
              </div>
              <p className={styles.curiosityText}>Bastante valorizados pelo rei de Sião (atual Tailândia), o gato Siamês era utilizado como vigia nos palácios. O imperador contava com o bichano posicionado em colunas ao lado do trono dele. Assim, quando alguma pessoa ameaçasse o monarca, o gato pularia em cima dela para imobilizá-lo.</p>
            </div>
          </div>

        </section>
      </div>
      
      
      

    );
}

export default SpeciePageComponent;