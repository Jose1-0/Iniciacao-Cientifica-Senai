import { useContext } from "react";


import { QuizContext } from "../context/quiz";







import "./GameOver.css";
import AudioResultados from "./AudioResultados";

const GameOver = (props) => {
  const [quizState, dispatch] = useContext(QuizContext);
 


  return (
    <div id="gameover">
      <AudioResultados />
      <h2>Etapa de <b>quiz</b> realizada com sucesso!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.</p> <br></br>
        <p>Muito obrigado por sua colaboração até aqui. Para finalizar sua participação, solicitamos gentilmente que você clique no link abaixo e responda o formulário (link externo) para nos contar mais sobre sua experiência
      </p>
      {/*<a href="https://www.youtube.com/watch?v=2w-FNiySmKk" >forms</a> 
      <br></br> */}
      <br></br>
      <p><b>Muito obrigado</b>. Caso tenha dúvidas, sugestões ou observações, entre em contato conosco: Luiz Rodrigues, <b>luiz.rodrigues@sistemafiep.org.br</b></p><br></br>

      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Enviar</button>
    </div>
  );
};

export default GameOver;