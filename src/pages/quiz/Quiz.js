import NQuiz from "../../componentes/tiposQuiz/Quiz";

export const quiz = () => {
  return (
    <div>
      <NQuiz
        imageUrl="./images/ImgBetta.png"
        text1="QUIZBETTA: SERÁ QUE ENTENDO DE PEIXE BETTA?"
        text2="Bem-vindo ao divertido e educativo Quiz sobre os fascinantes peixes Betta! Prepare-se para mergulhar no mundo colorido e cheio de personalidade desses belos peixes de aquário. Este quiz vai testar seus conhecimentos sobre os Bettas, desde suas características físicas até seus comportamentos únicos. Então, ajuste suas barbatanas e prepare-se para descobrir o quanto você sabe sobre esses pequenos reis dos aquários!"
        text3="Betta"
      />
      <NQuiz
        imageUrl="./images/ImgHamster.png"
        text1="HAMSTERMANIA: UM QUIZ PELUDO E DIVERTIDO!"
        text2="Bem-vindo ao nosso Quiz Rápido sobre Hamsters! Você está pronto para testar seus conhecimentos sobre esses adoráveis roedores de estimação? Responda às seis perguntas breves e descubra o quanto você sabe sobre os hamsters e suas peculiaridades. Vamos começar!"
        text3="Hamster"
      />
      <NQuiz
        imageUrl="./images/ImgSagui.png"
        text1="SAGUIS: UM QUIZ SOBRE OS PEQUENOS PRIMATAS."
        text2="Bem-vindo ao quiz divertido e educativo sobre saguis! Prepare-se para explorar o mundo encantador desses pequenos primatas e testar seus conhecimentos sobre sua biologia, comportamento e habitat. Os saguis são criaturas fascinantes encontradas principalmente na América do Sul, e este quiz vai desafiar você a aprender mais sobre eles. Então, vamos lá e divirta-se enquanto descobre fatos interessantes sobre esses adoráveis primatas!"
        text3="Sagui"
      />
    </div>
  );
};
export default quiz;
